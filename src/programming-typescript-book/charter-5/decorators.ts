export {};

type Payload = Record<string, unknown>;
type Serializable = {
  serialize(): string;
};

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
type ClassConstructor<T> = new (...args: any[]) => T;

function serializable<T extends ClassConstructor<{ getValue(): Payload }>>(
  Constructor: T,
) {
  return class extends Constructor {
    serialize() {
      return JSON.stringify(this.getValue());
    }
  };
}

@serializable
class APIPayload {
  getValue(): Payload {
    return {
      id: 1,
      name: "john",
      stats: {
        firstResult: 8,
        secondResult: 5,
      },
    };
  }
}

// interface APIPayload extends Serializable {}

// decorators are like calling a function
// let APIPayload = serializable(
//   class APIPayload {
//     getValue(): Payload {
//       return {
//         id: 1,
//         name: "charidimos",
//         stats: {
//           firstResult: 8,
//           secondResult: 5,
//         },
//       };
//     }
//   },
// );

const apiPayload = new APIPayload() as InstanceType<
  ReturnType<typeof serializable>
>;
console.log(apiPayload.serialize());

// const apiPayload = new APIPayload();
// console.log(apiPayload.serialize());

// const DecoratedApiPayload = serializable(APIPayload);
// const apiPayload = new DecoratedApiPayload();
// apiPayload.serialize();

// 1. => Typescript infers both parameters and the return type
// --------------------------------------------------------------------- //

// 2. Javascript's arguments object is not typesafe. For example:
function argumentsExample(arg1: number, arg2: number) {
  console.log(arguments[0].toUpperCase());
}

argumentsExample(1, 2);
// TypeError: arguments[0].toUpperCase is not a function

// instead we can use the rest parameters for unknown number of arguments
function argumentsExampleRest(...args: number[]) {
  // console.log(args[0].toUpperCase())
}

// --------------------------------------------------------------------- //
// 3. Ability to book vacation that starts immediately
type Reservation = {
  id: string;
  from: Date;
  to?: Date;
  destination: string;
};

type Reserve = {
  (from: Date, to: Date, destination: string): Reservation;
  (from: Date, destination: string): Reservation; // one way
};

let reserve: Reserve = (
  from: Date,
  toOrDestination: Date | string,
  destination?: string,
) => {
  if (toOrDestination instanceof Date) {
    if (typeof destination === "undefined") {
      throw Error("Please define destination");
    }

    return {
      id: "round-trip",
      from,
      to: toOrDestination,
      destination,
    };
  }

  return {
    id: "one-way",
    from,
    destination: toOrDestination,
  };
};

// 4.

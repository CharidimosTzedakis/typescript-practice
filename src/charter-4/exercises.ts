/*
exercise answers:
https://github.com/bcherny/programming-typescript-answers/blob/master/src/ch04/exercises.ts
 */

// 1. => Typescript infers both parameters and the return type
// --------------------------------------------------------------------- //

// 2. Javascript's arguments object is not typesafe. For example:
function argumentsExample(arg1: number, arg2: number) {
  console.log(arguments[0].toUpperCase());
}

// argumentsExample(1, 2);
// TypeError: arguments[0].toUpperCase is not a function

// instead we can use the rest parameters for unknown number of arguments
function argumentsExampleRest(...args: number[]) {
  // console.log(args[0].toUpperCase())
}

// --------------------------------------------------------------------- //
// 3. Ability to book vacation that starts immediately
type Reservation = {
  id: string;
  from?: Date;
  to?: Date;
  destination: string;
};

type Reserve = {
  (from: Date, to: Date, destination: string): Reservation;
  (from: Date, destination: string): Reservation; // one way
  (destination: string): Reservation; // start immediately
};

let reserve: Reserve = (
  fromOrDestination: Date | string,
  toOrDestination?: Date | string,
  destination?: string,
) => {
  if (typeof fromOrDestination === "string") {
    return {
      id: "immediate-trip",
      destination: fromOrDestination,
    };
  }

  if (typeof toOrDestination === "string") {
    return {
      id: "one-way",
      from: fromOrDestination,
      destination: toOrDestination,
    };
  }

  if (toOrDestination instanceof Date && typeof destination === "string") {
    return {
      id: "round-trip",
      from: fromOrDestination,
      to: toOrDestination,
      destination,
    };
  }

  throw Error("invalid params");
};

function bookReserve({
  from,
  to,
  destination,
}: {
  from?: Date;
  to?: Date;
  destination: string;
}): Reservation {
  let type: string;

  if (to && !from) {
    throw Error("Please provide from Date");
  }

  if (!from && !to) {
    type = "immediate-trip";
  } else if (!to) {
    type = "one-way";
  } else {
    type = "round-trip";
  }

  return {
    id: type,
    from,
    to,
    destination,
  };
}

// 4. only for functions whose second argument is string
function callFnc<T extends [unknown, string, ...unknown[]], R>(
  f: (...args: T) => R,
  ...args: T
): R {
  return f(...args);
}

function fillFunc(length: number, value: string): string[] {
  return Array.from({ length }, () => value);
}

console.log(callFnc(fillFunc, 1, "test"));

function testFunc(length: number, arg2: number, arg3: number): string[] {
  console.log(length);
  console.log(arg2);
  return ["test"];
}

// callFnc(testFunc, 2, 2, 3);

// 5.

function is<T>(a: T, ...b: [T, ...T[]]): boolean {
  return b.every((_) => _ === a);
}

console.log(is("string", "otherstring"));
console.log(is(true, false));
console.log(is(42, 42));
console.log(is(10, "foo"));
console.log(is([1], [1, 2], [1, 2, 3]));

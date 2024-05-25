let foo: unknown = 32;
let bar = foo === 123;
// let z = foo + bar;

if (typeof foo === "number") {
  const a1 = foo + 100;
}

let a3: true = true;
// let a4: true = false;

// ---------------------------------------------------- //

let a6: object = {
  b: "x",
};

// a6.b

let a7 = {
  c: {
    d: "f",
  },
};

let a8 = {
  b: "x",
};

// -------------------- Objects -------------------------- //
let person: {
  firstName: string;
  lastName: string;
} = {
  firstName: "john",
  lastName: "barrowman",
};

class Person {
  constructor(
    public firstName: string,
    public lastName: string,
  ) {}
}

person = new Person("matt", "smith");

let a9: { b: number };
// a9 = {};
// a9 = {
//   b: 1,
//   c: 2,
// };

let a10: {
  b: number;
  c?: string;
  [key: number]: boolean;
};

a10 = {
  b: 1,
  "1": true,
};

let airplaneSeatingAssignments: {
  [seatNumber: string]: string;
} = {
  "34D": "Borris Cherny",
  "34E": "Bill Gates",
};

let user: {
  readonly firstName: string;
} = {
  firstName: "abby",
};

// user.firstName = "abbey with an e";

let danger: {};
danger = {};
danger = { x: 1 };
danger = [];
danger = 2;

let a11: {} = {
  toString() {
    return 3;
  },
};
// let a12: Object = {
//   toString() {
//     return 3;
//   },
// };

// ------- Union and Intersections ----------- //

// type Cat = {name: string, purrs: boolean};
// type Dog = {name: string, barks: boolean, wags: boolean};
// type CatOrDogOrBoth = Cat | Dog;
// type CatAndDog = Cat & Dog;
//
// // cat
// let a13: CatOrDogOrBoth = {
//     name: 'Bonkers',
//     purrs: true
// }
//
// // Dog
// let a14: CatOrDogOrBoth = {
//     name: 'Domino',
//     barks: true,
//     wags: true
// }
//
// // Both
// let a15: CatOrDogOrBoth = {
//     name: 'Donkers',
//     barks: true,
//     purrs: true,
//     wags: true
// }
//
// let animal: CatOrDogOrBoth;
//
// let pet: Dog | Cat = {} as any;
//
// if ('purrs' in pet) {
//     console.log(pet.purrs);
// } else {
//     console.log(pet.barks);
// }

interface Cat {
  weight: number;
  whiskers: number;
}
interface Dog {
  weight: number;
  friendly: boolean;
}
let animal: Dog | Cat;

animal = {
  weight: 1,
  whiskers: 1,
  friendly: false,
};

// ------ arrays -------- //
let c1: string[];
c1 = ["a"];

let c2 = [1, 2, "test"];
c2.map((_) => {
  if (typeof _ === "number") {
    return _ * 3;
  }
  return _.toUpperCase();
});

// ----- tuples ------ //
let trainFares: [number, number?][] = [[3.75], [8.25, 7.7], [10.5]];
let moreTrainFares: ([number] | [number, number])[];
let friends: [string, ...string[]] = ["Sara", "Tali", "Chloe", "Claire"];

let as: readonly number[];
as = [2];
as = as.map((_) => 2);

// ----
enum Status {
  Todo,
  InProgress,
  Complete,
}

enum Language {
  English = 100,
  Spanish = 200 + 300,
  Russian,
}

let myFirstLanguage = Language.Russian;
let mySecondLanguage = Language["English"];

const enum Color {
  Red = "#c10000",
  Blue = "#007ac1",
  Pink = "0xc10050",
  White = 255,
}

// let c5 = Color[6];

// --------- exercises ------- //
let aa = 1042;
let bb = "apples and oranges";
const cc = "pineapples";
let dd = [true, true, false];
let ee = { type: "focus" };
let f = [1, false];
const g = [3];
let h = null;
const i = null;

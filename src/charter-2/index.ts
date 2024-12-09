console.log("Hello Typescript!!");

let a = 1 + 2;
let b = a + 3;
let c = {
  apple: a,
  banana: b,
};
let d = 1 ? "s" : null;

// let d = c.apple * "s"

let operation = (param: string | undefined) => {
  if (typeof param === "undefined") {
    return 0;
  }

  return param;
};

// ----------------------------------------------------------  //
function defaultIt(s: MaybeString): string {
  if (typeof s.content === "string") {
    return s.content;
  }

  return "";
}

class MaybeString {
  content: string | void;

  constructor() {
    this.content = "";
  }
}

// ---------------------------------------------------------  //

interface AType {
  type: "A";
  message: string;
}

interface BCType {
  type: "B" | "C";
}

type Test = AType | BCType;

// function doSomething(test: Test) {
//     if (test.type !== 'B' && test.type !== 'C') {
//         test.message
//     }
// }

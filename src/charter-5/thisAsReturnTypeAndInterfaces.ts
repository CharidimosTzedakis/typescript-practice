export {};

class Set {
  has(value: number): boolean;
  add(value: number): this; // we use this here instead of Set
}

class MutableSet extends set {
  delete(value: number): boolean;

  // no need for this
  // add(value: number): MutableSet;
}

interface A {
  good(x: number): string;
  bad(x: number): string;
}

interface B extends A {
  good(x: string | number): string;
  bad(x: string): string;
}

type C = {
  good(x: number): string;
  bad(x: number): string;
};

type D = C & {
  good(x: string | number): string;
  // results in an overloading signature for bad here instead of error
  // bad is now (x:string):string;
  bad(x: string): string;
};

interface Person {
  name: string;
  age: number;
}

interface Person {
  height: string;
}

const takis: Person = {
  name: "takis",
  age: 25,
};

interface AType {
  type: "A";
  message: string;
}

interface BCType {
  type: "B" | "C";
}

type Test = AType | BCType;

const c: Test = {
  type: "A",
  message: "hello",
};

function doSomething(test: Test) {
  if (test.type !== "B" && test.type !== "C") {
    test.message;
  }
}

function handleTest(test: Test) {
  if (test.type === "A") {
    // Narrowed to 'AType'
    console.log(test.message); // Valid because 'message' exists only in AType
  } else {
    // Narrowed to 'BCType' as test.type is "B" or "C"
    console.log("No message property for B or C types.");
  }
}

function isString(test: any): test is string {
  return typeof test === "string";
}

function example(foo: string | number) {
  if (isString(foo)) {
    console.log("it is a string" + foo);
    console.log(foo.length); // string function
  }
}

interface User<Age> {
  age: Age;
}

interface User<Age> {
  age: Age;
}

const user: User<25> = {
  age: 25,
};

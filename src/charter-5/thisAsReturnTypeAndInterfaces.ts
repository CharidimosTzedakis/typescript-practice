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

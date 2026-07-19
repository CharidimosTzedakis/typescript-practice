/* eslint-disable @typescript-eslint/no-unused-vars */

export {};

interface Animal {
  readonly name: string;
  eat(food: string): void;
  sleep(hours: number): void;
}

interface Feline {
  meow(): void;
}

class Cat implements Animal, Feline {
  name = "Whiskers";
  eat(food: string) {
    console.info("Ate some", food, ". Mmm!");
    this.name = "Snoopy";
  }
  sleep(hours: number) {
    console.info("Slept for", hours, " hours.");
  }
  meow() {
    console.info("Meow!");
  }
}

const cat = new Cat();
console.log(cat.name);
cat.eat("fish");
console.log(cat.name);

class A {
  private x = 1;
}
class B extends A {}
function f(a: A) {}
f(new A());
f(new B());
// f({ x: 1 }); --> not assignable

class D {
  x = 1;
}
function g(d: D) {}
g({ x: 1 });

interface E {
  (): void;
}
const test = (x: E) => x();

class F {}
const f1: F = new F();

// ------------------------------------------------------------ //
type State = {
  [key: string]: string;
};

class StringDatabase {
  state: State = {};
  get(key: string): string | null {
    return key in this.state ? this.state[key] : null;
  }
  set(key: string, value: string) {
    this.state[key] = value;
  }
  static from(state: State) {
    const db = new StringDatabase();
    for (const key in state) {
      db.set(key, state[key]);
    }
    return db;
  }
}

// instance type
// interface StringDatabase {
//   state: State;
//   get(key: string): string | null;
//   set(key: string, value: string): void;
// }

// typeof StringDatabase
// interface StringDatabaseConstructor {
//   new (): StringDatabase;
//   from(state: State): StringDatabase;
// }

function sum() {
  return Array.from(arguments).reduce((total, n) => total + n, 0);
}

// sum(1, 2, 3);

function sumVariadicSafe(...numbers: number[]) {
  return numbers.reduce((total, n) => total + n, 0);
}

sumVariadicSafe(1, 2, 3);

//
interface Console {
  log(message?: any, ...optionalParams: any[]): void;
}

function add(a: number, b: number) {
  return a + b;
}

type Context = {
  appId?: string;
  userId?: string;
};

function log(message: string, context: Context = {}) {
  const time = new Date().toISOString();
  console.log(time, message, context.userId);
}

log("this is a message", { userId: "usr-292Ak291" });
log("please log this");

add(10, 20);
add.apply(null, [10, 20]);
add.call(null, 10, 20);
add.bind(null, 10, 20)();

const fnc = add.bind(null, 10);
console.log(fnc(20));

// --------------- //
// IterableIterator<number>
function* createNumbers() {
  let n = 0;
  while (1) {
    yield n++;
  }
}

// let numbers = createNumbers();
// numbers.next(); // {value: 0, done: false}

// numbers ---> Iterable
let numbers = {
  *[Symbol.iterator]() {
    for (let n = 1; n <= 10; n++) {
      yield n;
    }
  },
};

for (const q of numbers) {
  console.log(q);
}

let allNumbers = [...numbers];
let [one, two, ...rest] = numbers;

// overloading function declarations
function createElement(tag: "a"): HTMLAnchorElement;
function createElement(tag: "canvas"): HTMLCanvasElement;
function createElement(tag: "table"): HTMLTableElement;
function createElement(tag: string): HTMLElement {
  return document.createElement(tag);
}

type WarnUser = {
  (warning: string): void;
  wasCalled: boolean;
};

const warnUser: WarnUser = (warning) => {
  if (warnUser.wasCalled) {
    return;
  }
  warnUser.wasCalled = true;
  alert(warning);
};
warnUser.wasCalled = false;

// ---------------- GENERIC types ---------------- //

type Filter = <T>(array: T[], cb: (item: T) => boolean) => T[];

const filter: Filter = (array, cb) => {
  const result = [];
  for (const item of array) {
    if (cb(item)) {
      result.push(item);
    }
  }

  return result;
};

// TODO: filter homogenous array
console.log(filter([1, 2, 3, 4, 5], (n) => n < 4));

// TODO: filter non homogenous array
console.log(
  filter([1, 2, 3, { test: "string" }, 5], (n) => {
    if (typeof n === "number") {
      return n < 4;
    } else {
      return false;
    }
  }),
);

type MapFunction = <T, V>(array: T[], transform: (item: T) => V) => V[];
type MapFunctionGeneric<T, V> = (array: T[], transform: (item: T) => V) => V[];

const map: MapFunction = (array, transform) => {
  const result = [];

  for (const item of array) {
    result.push(transform(item));
  }

  return result;
};

console.log(map([1, 2, 3], (item) => `the number is ${item}`));
console.log(map<number, string>([1, 2, 3], (item) => `the number is ${item}`));

let promise = new Promise<number>((resolve) => resolve(45));
promise.then((result) => result * 4);

type MyEvent<T> = {
  target: T;
  type: string;
};
// type ButtonEvent = MyEvent<HTMLButtonElement>;

type TimedEvent<T> = {
  event: MyEvent<T>;
  from: Date;
  to: Date;
};

// ------------------------------- Bounded Polymorphism ---------------------------- //
type TreeNode = {
  value: string;
};
type LeafNode = TreeNode & {
  isLeaf: true;
};
type InnerNode = TreeNode & {
  children: [TreeNode] | [TreeNode, TreeNode];
};

let a1: TreeNode = { value: "a" };
let b1: LeafNode = { value: "b", isLeaf: true };
let d1: InnerNode = { value: "c", children: [b1] };

// type MapNode = <T>(
//   node: TreeNode & T,
//   callbackFn: (value: string) => string,
// ) => TreeNode & T;
//
// const mapNode: MapNode = (node, callbackFn: (value: string) => string) => {
//   node.value = callbackFn(node.value);
//   return node;
// };

function mapNode<T extends TreeNode>(node: T, f: (value: string) => string): T {
  return {
    ...node,
    value: f(node.value),
  };
}
let node1 = mapNode(a1, (_) => _.toUpperCase());
let node2 = mapNode(b1, (_) => _.toUpperCase());
let node3 = mapNode(d1, (_) => _.toUpperCase());

function call<T extends unknown[], U>(f: (...args: T) => U, ...args: T): U {
  return f(...args);
}

function fill(length: number, value: string): string[] {
  return Array.from({ length }, () => value);
}

call(fill, 10, "a");

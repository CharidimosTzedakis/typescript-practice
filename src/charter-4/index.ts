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

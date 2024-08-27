export {};

function* numbers(i: number): Generator<number, number> {
  let initialNumber = i;
  while (true) {
    try {
      yield initialNumber++;
    } catch (e) {
      console.log("error", e);
    } finally {
      console.log("finished");
      yield 8888;
      // return 99999;
    }
  }
}

const getNumbers = numbers(0);
console.log(getNumbers.next().value);
// getNumbers.throw(Error("this is an error"));
console.log(getNumbers.return(3));

// console.log(getNumbers.next().value);
// console.log(getNumbers.next().value);
// console.log(getNumbers.next().value);
// console.log(getNumbers.next().value);
//

// iterable
// [Symbol.iterator]() must return an iterator
// if it is a generator function, then it returns an iterator
const obj = {
  numbers: [1, 25, 29, 59, 68, 89],
  *[Symbol.iterator]() {
    for (const n of this.numbers) {
      yield n;
    }
  },
};

for (const i of obj) {
  console.log(i);
}

// custom iterator
function createIterator() {
  let currentIndex = 0;

  return {
    values: [1, 5, 10, 15],
    next() {
      return currentIndex < this.values.length
        ? { value: this.values[currentIndex++], done: false }
        : { value: undefined, done: true };
    },
    return(value: number) {
      console.log(currentIndex);
      return { value, done: true };
    },
    throw(e: Error) {
      console.log("cleanup");
    },
  };
}

const valuesIterator = createIterator();
console.log("----- values iterator ------");
console.log(valuesIterator.next().value);
console.log(valuesIterator.next().value);
console.log(valuesIterator.next().value);
console.log(valuesIterator.next().value);
console.log(valuesIterator.next().value);
console.log(valuesIterator.next().value);
console.log(valuesIterator.return(3));

// iterable iterator
// Satisfies both the Iterator Protocol and Iterable
// Doing so allows an iterator to be consumed by the various syntaxes expecting iterables
const myIterator = {
  next() {
    // ...
  },
  [Symbol.iterator]() {
    return this;
  },
};

const arrayToFilterOrMap: string[] = ["a", "1", "2"];
// a.filter((entry) => entry !== "a");

// --------- Filter -------- //
// type FilterFunc = <T>(array: T[], cb: (entry: T) => boolean) => T[];
type FilterFunc = <T>(array: T[], cb: (entry: T) => boolean) => T[];

const filterFunc: FilterFunc = (array, filter) => {
  let filteredArray: typeof array = [];
  for (const entry of array) {
    if (filter(entry)) {
      filteredArray = [...filteredArray, entry];
    }
  }
  return filteredArray;
};

console.log(filterFunc(arrayToFilterOrMap, (entry) => entry !== "a"));

// -------- Map  ---------- //
// type MapFunc<T, U> = (array: T[], cb: (entry: T) => U) => U[];
//
// const mapFunc: MapFunc<string, number> = (array, mapFunc) => {
//   let mappedArray: number[] = [];
//
//   for (const entry of array) {
//     mappedArray = [...mappedArray, mapFunc(entry)];
//   }
//
//   return mappedArray;
// };
//
// console.log(mapFunc(arrayToFilterOrMap, (entry) => Number(entry)));

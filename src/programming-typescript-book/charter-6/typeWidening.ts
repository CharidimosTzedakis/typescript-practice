const d = { x: 3 };

// recursively declares as readonly
const d = { x: { y: 5 } } as const;

enum Status {
  TODO = "todo",
  IN_PROGRESS = "inProgress",
  DONE = "done",
}

const x = Status.DONE;

const StatusObj = {
  TODO: "todo",
  IN_PROGRESS: "inProgress",
  DONE: "done",
} as const;

const test = StatusObj.DONE;

// ------> excess property checking <------
// when you try to assign a fresh object literal type T to another type U, and T has
// properties that aren’t present in U, TypeScript reports an error.
// A "fresh object literal type" is the type TypeScript infers from an object literal
type Options = {
  baseURL: string;
  cacheSize?: number;
  tier?: "prod" | "dev";
};

class API {
  constructor(private options: Options) {}
}

new API({
  baseURL: "https://api.mysite.com",
  tierr: "prod", // caught by TS!!! (even if object types are co-variant in their members)
});

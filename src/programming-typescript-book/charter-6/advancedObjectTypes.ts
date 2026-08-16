// function get<O extends object, K extends keyof O>(o: O, k: K): O[K] {
//   return o[k];
// }

type ActivityLog = {
  lastEvent: Date;
  events: {
    id: string;
    timestamp: Date;
    type: "Read" | "Write";
  }[];
};

let activityLog: ActivityLog = {
  lastEvent: new Date(),
  events: [{ id: "AJSI", type: "Read", timestamp: new Date() }],
};
let lastEvent = get(activityLog, "lastEvent");
let lastEvent2 = activityLog.lastEvent;

type Get = {
  <O extends object, K1 extends keyof O>(o: O, k1: K1): O[K1];
  <O extends object, K1 extends keyof O, K2 extends keyof O[K1]>(
    o: O,
    k1: K1,
    k2: K2,
  ): O[K1][K2];
  <
    O extends object,
    K1 extends keyof O,
    K2 extends keyof O[K1],
    K3 extends keyof O[K1][K2],
  >(
    o: O,
    k1: K1,
    k2: K2,
    k3: K3,
  ): O[K1][K2][K3];
};

const get: Get = (object: Record<string, unknown>, ...keys: string[]) => {
  let result: unknown = object;
  keys.forEach((k) => (result = (result as Record<string, unknown>)[k]));
  return result;
};

const firstEventType = get(activityLog, "events", 0, "type");

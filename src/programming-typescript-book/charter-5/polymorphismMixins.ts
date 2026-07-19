class MyMap<K, V> {
  private _map: Map<K, V> = new Map();

  constructor(initialKey?: K, initialValue?: V) {
    if (initialKey && initialValue) {
      this._map.set(initialKey, initialValue);
    }
  }
  // constructor() {}

  get(key: K): V | undefined {
    return this._map.get(key);
  }

  set(key: K, value: V): void {
    this._map.set(key, value);
  }

  forEach(
    callbackfn: (value: V, key: K, map: Map<K, V>) => void,
    thisArg?: unknown,
  ): void {
    this._map.forEach(callbackfn, thisArg);
  }

  merge<K1, V1>(map: MyMap<K1, V1>): MyMap<K | K1, V | V1> {
    const mergedMap = new MyMap<K | K1, V | V1>();
    this._map.forEach((value, key) => {
      mergedMap.set(key, value);
    });
    map.forEach((value, key) => {
      mergedMap.set(key, value);
    });

    return mergedMap;
  }

  static of<K, V>(k: K, v: V): MyMap<K, V> {
    return new MyMap<K, V>(k, v);
  }
}

const mapVar = new MyMap(1, "one");
mapVar.set(2, "two");
mapVar.set(3, "three");

const mapVar2 = MyMap.of(4, "four");
mapVar2.set(2, "twoAltered");

const result = mapVar.merge(mapVar2);
console.log(result);

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
type ClassConstructor<T> = new (...args: any[]) => T;
type Debuggable = {
  getDebugValue: () => object;
};

// function withEZDebug<C extends ClassConstructor>(Class: C) {
//   return class extends Class {
//     constructor(...args: any[]) {
//       super(...args);
//     }
//   };
// }

function withEZDebug<C extends ClassConstructor<Debuggable>>(Class: C) {
  return class NamedClass extends Class {
    debug() {
      const Name = Class.name;
      const value = this.getDebugValue();
      return Name + "(" + JSON.stringify(value) + ")";
    }
  };
}

class HardToDebugUser {
  constructor(
    private id: number,
    private firstName: string,
    private lastName: string,
  ) {}
  getDebugValue() {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
    };
  }
}

const User = withEZDebug(HardToDebugUser);
const user = new User(3, "Emma", "Watson");
console.log(user.debug());

class MyMap<K, V> {
  private _map: Map<K, V> = new Map();
  forEach = this._map.forEach;

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

  static of<K, V>(k: K, v: V): MyMap<K, V> {}
}

const mapVar = new MyMap(1, "one");
mapVar.set(2, "two");
mapVar.set(3, "three");

const mapVar2 = new MyMap(4, "four");
mapVar2.set(2, "twoAltered");

const result = mapVar.merge(mapVar2);
console.log(result);

export {};

type Breed = Record<string, string | number | object>;

const isValidURL = (url: string) => true;

const breed: Breed = {
  name: "Bulldog",
  creativity: 9,
  weight: {
    min: 10,
    max: 20,
  },
};

// function filterBreed(breed: Breed) {
//   const keysWithStringValues = Object.keys(breed)
//     .filter((key) => typeof breed[key] === "string")
//     .filter((key) => !isValidURL(breed[key]));
// }

const isString = (value: unknown): value is string => typeof value === "string";

const isStringValueEntry = (
  entry: [string, string | number | object],
): entry is [string, string] => typeof entry[1] === "string";

function filterBreed2(breed: Breed) {
  const breedTextProps = new Map<string, string>(
    Object.entries(breed).filter(isStringValueEntry),
  );
}

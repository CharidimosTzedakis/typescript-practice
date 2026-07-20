// ----- passing a SUBTYPE of what is expected -----

// an existing user that we got from the server
type ExistingUser = {
  id: number;
  name: string;
};

// a new user that hasn't been saved to the server yet
type NewUser = {
  name: string;
};

function deleteUser(user: { id?: number; name: string }) {
  delete user.id;
}

const existingUser: ExistingUser = { id: 1, name: "charidimos" };
deleteUser(existingUser);

console.log(existingUser.id);

// ----- passing a SUPERTYPE of what is expected -----

type LegacyUser = {
  id?: number | string;
  name: string;
};

const legacyUser: LegacyUser = { id: "1233", name: "charidimos" };
// deleteUser(legacyUser);

// classes --> allowed
class Animal {
  name = "";
}
class Dog extends Animal {
  bark() {}
}

const dogs: Dog[] = [];
const animals: Animal[] = dogs;

class Cat extends Animal {
  meow() {}
}

animals.push(new Cat()); // allowed!
dogs[0].bark(); // runtime error

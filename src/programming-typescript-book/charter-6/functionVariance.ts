// working on function variance examples
function triggerCallback(
  callback: (
    name: string,
    id: number,
  ) => { status: string; timestamp?: string },
) {
  const name = "john";
  const id = 1;

  return callback(name, id);
}

const func = (name: string, id?: number) => {
  return { status: "ok" };
};

triggerCallback(func);

class Animal {}
class Bird extends Animal {
  chirp() {}
}
class Crow extends Bird {
  caw() {}
}

// Crow <: Bird <: Animal

function chirp(bird: Bird): Bird {
  bird.chirp();
  return bird;
}

chirp(new Animal());
chirp(new Bird());
chirp(new Crow());

function clone(f: (b: Bird) => Bird) {
  const b = new Bird();
  f(b);
}

// ----------  Parameters check -----------------

function birdToBird(b: Bird): Bird {
  b.chirp();
  return b;
}

clone(birdToBird); // OK

function crowToBird(c: Crow): Bird {
  c.caw();
  return c;
}

clone(crowToBird);

function animalToBird(a: Animal): Bird {
  return new Bird();
}

clone(animalToBird);

// ----------  Return type check -----------------

function birdToCrow(b: Bird): Crow {
  return new Crow();
}
clone(birdToCrow);

function birdToAnimal(b: Bird): Animal {
  return new Animal();
}
clone(birdToAnimal);

type UserTextEvent = {
  type: "TextEvent";
  value: string;
  target: HTMLInputElement;
};

type UserMouseEvent = {
  type: "MouseEvent";
  value: [number, number];
  target: HTMLElement;
};

type UserEvent = UserTextEvent | UserMouseEvent;

function handle(event: UserEvent) {
  if (event.type === "TextEvent") {
    console.log(event.value); // string
    console.log(event.target);
    //...
    return;
  }
  console.log(event.value); // [number, number]
  console.log(event.target);
}

// can we write sth like this? (recursive type definition)
// UserEvent = UserEvent | {x: number};
// --> only sth like UserEvent = {title: string; childEvent?: UserEvent;}

type UserNewFormat = {
  uuid: string;
  type: "NEW_FORMAT_USER";
  username: string;
  name?: string;
};

type LegacyUser = {
  uuid: string;
  type: "LEGACY_USER";
  username: string;
  firstName?: string;
  lastName?: string;
};

type User = UserNewFormat | LegacyUser;

// satisfies at least one of the two (or both)
const user: User = {
  uuid: "SKVO123",
  type: "NEW_FORMAT_USER",
  username: "jdoe",
  lastName: "doe",
  name: "joe",
};

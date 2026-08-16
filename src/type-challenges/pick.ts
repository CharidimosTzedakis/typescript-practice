interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyPick<T, V extends keyof T> = {
  [K in V]: T[K];
};

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

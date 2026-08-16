type Weekday = "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
type Day = Weekday | "Sat" | "Sun";

function getNextDay(w: Weekday): Day {
  switch (w) {
    case "Mon":
      return "Tue";
    case "Tue":
      return "Tue";
    case "Wed":
      return "Tue";
    case "Thu":
      return "Tue";
    case "Fri":
      return "Fri";
  }
}

function getLabel(value: number): string | undefined {
  if (value > 0) {
    return "positive";
  }
  return undefined;
}

function isBig(n: number) {
  if (n >= 100) {
    return true;
  }
}

// call(thisArg)
// call(thisArg, arg1)
// call(thisArg, arg1, arg2)
// call(thisArg, arg1, arg2, /* …, */ argN)

type CallType = <T extends unknown[], U, V>(
  functionToCall: (this: any, ...params: T) => U,
  thisArg: V,
  ...args: T
) => U;

const callFunc: CallType = (functionToCall, thisArg, ...args) => {
  return functionToCall.bind(thisArg)(...args);
};

function testMe(this: string, ...args: string[]) {
  console.log(this);
  console.log(...args);
}

callFunc(testMe, 2, "arg1", "arg2");

function anotherFunction() {}

function fnWithCallback(callbackFuncktion) {
  callbackFuncktion();
}

fnWithCallback(anotherFunction);

function printMyName() {
  console.log(`Bogdan`);
}

console.log(`Start`);
setTimeout(printMyName, 1000);

function sum() {
  let i = 0;
  let counter = 0;
  while (i < arguments.length) {
    counter += arguments[i];
    i++;
  }
  return counter;
}

function oddDecorator(fn) {
  return function(...args) {
    const oddNumbers = args.filter(n => n % 2 !== 0);
    return fn(...oddNumbers);
  };
}
const oddSum = oddDecorator(sum);

console.log(oddSum(1, 2, 3, 4, 5, 6, 7));
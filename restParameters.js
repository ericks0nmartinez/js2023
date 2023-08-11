function sum(n1, n2) {
  return n1 + n2;
}

console.log(sum(10, 5));

function sum1(...args) {
  let total = 0;
  for (const number of args) {
    total += number;
  }
  return total;
}

console.log("sum1:", sum1(1, 2, 3, 4, 5, 6, 7, 8));

function sum2(...args) {
  const initialvalue = 0;
  return args.reduce(
    (acumulador, currentValue) => acumulador + currentValue,
    initialvalue
  );
}

console.log("sum2:", sum2(1, 2, 3, 4, 5, 6, 7, 8));

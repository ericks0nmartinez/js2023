//function
function sum(n1, n2) {
  return n1 + n2;
}

console.log(sum(10, 5));

//arrow function
const sum1 = (...args) => {
  const initialvalue = 0;
  return args.reduce(
    (acumulador, currentValue) => acumulador + currentValue,
    initialvalue
  );
};

console.log("sum1:", sum1(1, 2, 3, 4, 5, 6, 7, 8));

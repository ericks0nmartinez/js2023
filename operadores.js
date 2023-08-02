let typeNumber = 10;
let numberCalcular = 25;

function soma(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function dividir(a, b) {
  return a / b;
}

function multiplicar(a, b) {
  return a * b;
}

console.log("soma", soma(typeNumber, numberCalcular));
console.log("subtrair", subtrair(typeNumber, numberCalcular));
console.log("dividir", dividir(typeNumber, numberCalcular));
console.log("multiplicar", multiplicar(typeNumber, numberCalcular));

// operadores de atribuição
console.log(typeNumber);
typeNumber = typeNumber + 15;
console.log(typeNumber);
typeNumber += 25;
console.log(typeNumber);

// operadores de subtração
console.log(typeNumber);
typeNumber = typeNumber - 15;
console.log(typeNumber);
typeNumber -= 25;
console.log(typeNumber);

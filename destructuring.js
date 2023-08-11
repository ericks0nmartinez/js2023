const number = [1, 3, 9, 8, 7, 4];

const primeiraPosicao = number[0];
const segundaPosicao = number[1];
const terceiraPosicao = number[2];
const quartaPosicao = number[3];

console.log(primeiraPosicao, segundaPosicao, terceiraPosicao, quartaPosicao);

const [primeira, segunda, terceira, quarta, ...resto] = number;

console.log("destructuring", primeira, segunda, terceira, quarta);
console.log("With resto:", primeira, segunda, terceira, quarta, resto);

const person = {
  nome: "Erickson",
  age: 35,
  city: "Campo grande",
  uf: "MS",
};
const { nome, age, city, ...rest } = person;

console.log("person:", nome, city, rest, age);

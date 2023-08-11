const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// constateanando
const array3 = array1.concat(array2);
console.log("concat", array3);

//spread
const array4 = [...array1, ...array2];
console.log("spread", array4);

//spread operator objects
const person = { id: 1, nome: "Erickson" };
const addresss = { id: 1, city: "Campo grande" };

const data = {
  ...person,
  ...addresss,
};
console.log("spread operator objects", data);

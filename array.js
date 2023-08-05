//Array                         0         1       2          3
const createArrayPeoples = ["Erickson", "Jaq", "Jova", "Gustavo"];
//length
console.log("length", createArrayPeoples.length);
// position
console.log("position 2", createArrayPeoples[2]);

//forOf
for (const people of createArrayPeoples) {
  console.log("people:", people);
}

const numbers = [0, 1, 2, 3, 4, 1, 5];
//filter
const numberRepite = numbers.filter((number) => number === 1);
console.log("numberRepite:", numberRepite);

//find
const firstNumber = numbers.find((number) => number === 1);
console.log("firstNumber:", firstNumber);

const allTypes = ["Erickson", 50, true, "Jaq", 1, null, undefined];
// forEach
allTypes.forEach((element) => {
  console.log("allTypes:", element);
});

//push
allTypes.push("testePush");
console.log("allTypes.length:", allTypes[allTypes.length - 1]);

//pop
allTypes.pop();
console.log("allTypes.length:", allTypes[allTypes.length + 1]);

const cars = [
  { id: 1, name: "Corolla" },
  { id: 2, name: "Gol" },
  { id: 3, name: "Prisma" },
  { id: 4, name: "S10" },
];

console.log("Car in position 0:", cars[0].name);
console.log("Car in position 1:", cars[1].name);

for (const car of cars) {
  console.log(`Car ${car.id}:`, car.name);
}

cars.push({ id: 5, name: "Ferrari" });

console.log("Array:", cars);

console.log("Add car in position 4:", cars[4].name);

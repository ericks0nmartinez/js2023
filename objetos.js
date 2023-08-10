const car = {
  name: "Corolla",
  color: "black",
  fabrication: 2023,
  "size-car": "4 Metros",
  "air-bag": true,
};

//acessar propriedade do objeto
console.log("car.name:", car.name);
console.log("car['size-car']:", car["size-car"]);

//modificar o valor de uma propriedade
car.name = "Honda Civic";
console.log("car.name modificado:", car.name);

///criar uma nova propriedade
console.log("car.age:", car.age);
car.age = 3;
console.log("car.age criado:", car.age);

//deletar uma propriedade

delete car.age;
console.log("car.age deletado:", car.age);

//verificar se existe uma propriedade
console.log(`name existe ${"name" in car}`);

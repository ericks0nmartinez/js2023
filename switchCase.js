const nome = "Daniel";

if (nome === "Maria") {
  console.log(`${nome} no if`);
} else if (nome === "Daniel") {
  console.log(`${nome} no if`);
} else {
  console.log(`${nome} desconhecido no if`);
}

switch (nome) {
  case "Daniel":
    console.log(`${nome} no switch`);
    break;
  case "Maria":
    console.log(`${nome} no switch`);
    break;

  default:
    console.log(`${nome} desconhecido no switch`);
    break;
}

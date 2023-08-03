let media = (10 + 3 + 7 + 6) / 4;
let resultado = "Aluno reprovado";

if (media >= 7) {
  resultado = `Aluno aprovado com nota: ${media}`;
} else if (media >= 5 && media < 7) {
  resultado = `Aluno de recuperação de nota: ${media}`;
}

console.log(resultado);

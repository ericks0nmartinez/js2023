const grades = [7, 8, 9, 6, 7, 5];

function sumGrades(params) {
  let result = 0;
  for (const grade of params) {
    result += grade;
  }
  return result;
}

const sum = sumGrades(grades);

function mediaGrades(sum, tam) {
  return sum / tam;
}

const media = mediaGrades(sum, grades.length);

console.log("sum", sum);
console.log("media", media);

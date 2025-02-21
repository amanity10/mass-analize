
const grades =[];
for (let i = 0; i < 12; i++) {
    grades.push(Math.floor(Math.random() * 100) + 1);
}
let total = grades.reduce((sum, grade) => sum + grade, 0);
let average = total / grades.length;
let maxGrade = Math.max(...grades);
let minGrade = Math.min(...grades);
let positiveCount = grades.filter(grade => grade >= 60).length;
let negativeCount = grades.filter(grade => grade < 60).length;
let letterGrades = grades.map(grade => {
    if (grade >= 80) return 'A';
    if (grade >= 60) return 'B';
    if (grade >= 40) return 'C';
    if (grade >= 20) return 'D';
    return 'E';
});
console.log("Оценки студентов:", grades);
console.log("Средний балл:", average.toFixed(2));
console.log("Максимальный балл:", maxGrade);
console.log("Минимальный балл:", minGrade);
console.log("Количество студентов с положительной оценкой (>= 60):", positiveCount);
console.log("Количество студентов с отрицательной оценкой (< 60):", negativeCount);
console.log("Буквенные оценки студентов:", letterGrades);

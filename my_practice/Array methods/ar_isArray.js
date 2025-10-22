/*Array.isArray()
Проверяет, является ли переданный объект массивом.*/

let array = [1, 2, 3];
let notArray = {a: 1, b: 2};

console.log(Array.isArray(array)); // true
console.log(Array.isArray(notArray)); // false
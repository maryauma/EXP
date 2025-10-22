/*Array.prototype.includes()-Проверяет, содержит ли массив указанно
значение (использует строгое сравнение ===).*/
let arr=[1,2,3,4,5,"hello"];
console.log(arr.includes(9));//false
console.log(arr.includes(3));//true
console.log(arr.includes("Hello"));//false
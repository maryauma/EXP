/*Array.prototype.at()-Возвращает элемент по указанному индексу,
поддерживает отрицательные индексы для доступа с конца массива.*/

let array = [10, 20, 30, 40, 50];

console.log(array.at(0)); // 10
console.log(array.at(-1)); // 50
console.log(array.at(5)); // undefined
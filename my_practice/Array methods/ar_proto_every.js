/*Array.prototype.every()-Проверяет, удовлетворяют
ли все элементы массива условию в callback-функции
  Если все элементы удовлетворяют условию, возвращает true,
  иначе false.*/

const numbers = [1, 2, 3, 4, 5];
const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true
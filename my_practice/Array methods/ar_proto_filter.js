/*Array.prototype.filter()-Создает новый массив, содержащий все элементы массива,
которые прошли проверку, заданную в передаваемой функции.*/
const numbers = [1, 2, 3, 4, 5, 6];

// Функция для проверки, является ли число четным
function isEven(number) {
  return number % 2 === 0;
}

// Используем метод filter для создания нового массива с четными числами
const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers); // Вывод: [2, 4, 6]

// Пример с использованием стрелочной функции
const greaterThanThree = numbers.filter(num => num > 3);
console.log(greaterThanThree); // Вывод: [4, 5, 6]
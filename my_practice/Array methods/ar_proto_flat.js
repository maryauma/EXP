/*Array.prototype.flat()-Создаёт новый массив, разворачивая вложенные
массивы до указанной глубины (по умолчанию 1).*/
const nestedArray = [1, [2, 3], [4, [5, 6]]];

// Разворачиваем массив на одну глубину
const flattenedArray1 = nestedArray.flat();
console.log(flattenedArray1); // Вывод: [1, 2, 3, 4, [5, 6]]
// Разворачиваем массив на две глубины
const flattenedArray2 = nestedArray.flat(2);
console.log(flattenedArray2); // Вывод: [1, 2, 3, 4, 5, 6]  

const flattenedArray3 = nestedArray.flat(3);
console.log(flattenedArray3); // Вывод: [1, 2, 3, 4, 5, 6]
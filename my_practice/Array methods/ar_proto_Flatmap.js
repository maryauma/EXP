/*Array.prototype.flatMap()-Применяет callback-функцию
к каждому элементу и разворачивает результат на один уровень.*/
const arr = [1, 2, [3, 4,[5]]];
const flattenedArray1=arr.flat();
const flattenedArray2=arr.flat(2);
const result = flattenedArray2.flatMap(x => [[x, x * 2]]);
console.log(result);

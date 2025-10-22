/*Array.prototype.concat()-Объединяет массив с другими массивами
или значениями, возвращая новый массив.*/

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combined = array1.concat(array2, 7, 8,"вот так работает concat");

console.log(combined); // [1, 2, 3, 4, 5, 6, 7, 8, "вот так работает concat"]
/*Array.prototype.keys()-Возвращает итератор индексов массива.*/
let arr = ["a", "b", "c"];
let keys = arr.keys();
let one_line = [...keys].join(",");
console.log(one_line); // "0,1,2"

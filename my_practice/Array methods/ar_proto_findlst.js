/*Array.prototype.findLast()-Возвращает последний элемент,
удовлетворяющий условию, или undefined.*/

let arr=[5,12,8,130,44];
console.log(arr.findLast(el=>el>10));
console.log(arr.findLast(el=>el>200));//undefined
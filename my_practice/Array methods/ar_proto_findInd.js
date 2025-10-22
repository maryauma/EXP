/*Array.prototype.findIndex()-Возвращает индекс первого элемента,
удовлетворяющего условию, или -1.*/

let arr=[5,12,8,130,44];
console.log(arr.findIndex(el=>el>10));
console.log(arr.findIndex(el=>el>200));//-1

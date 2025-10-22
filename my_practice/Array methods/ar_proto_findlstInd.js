/*Array.prototype.findLastIndex()
Возвращает индекс последнего элемента, удовлетворяющего условию, или -1.
*/
let arr=[5,12,8,130,44];
console.log(arr.findLastIndex(el=>el<10));
console.log(arr.findLastIndex(el=>el>200));//-1
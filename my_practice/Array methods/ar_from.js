/*Array.from() -Создаёт новый экземпляр массива из 
массивоподобного или итерируемого объекта.*/

let str = "123";
let arr = Array.from(str); // ['1', '2', '3']
let mapped = Array.from(str, x => Number(x)); // [1, 2, 3]

console.log(arr)
console.log(mapped)

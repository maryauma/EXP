/*Array.prototype.map()-Создаёт новый массив, применяя callback-функцию
к каждому элементу*/
let arr=[1,2,3,[4,[3]],5];
let newArr=arr.map(el=>el*2);
console.log(newArr);
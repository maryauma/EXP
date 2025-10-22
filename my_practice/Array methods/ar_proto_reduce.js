/*Array.prototype.reduce()-Применяет callback-функцию для свёртки
массива в одно значение (слева направо).*/
let arr=[1,2,3,4];
let sum=arr.reduce((acc,el)=>acc+el,0);
console.log(sum); // 10

/*
1-й шаг: acc = 0, el = 1 → 0 + 1 = 1.
2-й шаг: acc = 1, el = 2 → 1 + 2 = 3.
3-й шаг: acc = 3, el = 3 → 3 + 3 = 6.
4-й шаг: acc = 6, el = 4 → 6 + 4 = 10.
Результат: 10.*/
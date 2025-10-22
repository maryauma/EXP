/*Object.fromEntries(entries)-Преобразует список пар ключ-значение
(например, массив из массивов [key, value]) в объект*/

const entries = new Map([
    ['name', 'Muhammad'],
    ['age', 20],
    ['gender', 'male'],
]);
const obj = Object.fromEntries(entries);
console.log(obj);
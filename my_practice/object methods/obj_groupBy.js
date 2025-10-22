/*Object.groupBy(items, callbackFn)-Группирует элементы массива
items в объект, где ключи формируются с помощью функции callbackFn*/

const items = [
    { name: 'Alice', age: 21 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 29 },
    { name: 'David', age: 25 },
    { name: 'Eve', age: 30 },
    { name: 'Alice', age: 29 },
    { name: 'alice', age: 29 },
];

const groupedByName = Object.groupBy(items, item => item.name);
console.log(groupedByName);
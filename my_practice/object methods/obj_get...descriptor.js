/*Object.getOwnPropertyDescriptor(obj, prop)-Возвращает дескриптор свойства
prop объекта obj (или undefined, если свойства нет)*/
let person = {
    name: "Muhammad",
    age: 20,
    gender:"male"};

let descriptor = Object.getOwnPropertyDescriptor(person, 'name');
console.log(descriptor);
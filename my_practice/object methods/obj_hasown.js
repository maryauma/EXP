/*Object.hasOwn(obj, prop)-Проверяет, является ли prop собственным
свойством объекта obj*/
let person = {
    name: "Muhammad",
    age: 20,
    gender:"male"
};

console.log(Object.hasOwn(person, "name")); // true
console.log(Object.hasOwn(person, "gender")); // true
console.log(Object.hasOwn(person, "toString")); // false
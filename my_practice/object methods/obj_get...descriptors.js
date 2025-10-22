/*Object.getOwnPropertyDescriptors(obj)-Возвращает объект, содержащий дескрипторы
всех собственных свойств объекта obj*/
let person = {
    name: "Muhammad",
    age: 20,
    gender:"male"};

let descriptor = Object.getOwnPropertyDescriptors(person,);
console.log(descriptor);
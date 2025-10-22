/*Object.getPrototypeOf(obj)-Возвращает прототип объекта obj*/
let person = {
    name: "Muhammad",
    age: 20,
    gender:"male"
};

let proto = Object.create(person);
console.log(Object.getPrototypeOf(proto));
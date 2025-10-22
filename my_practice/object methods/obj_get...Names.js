/*Object.getOwnPropertyNames(obj)-Возвращает массив строк с именами
всех собственных свойств объекта (включая неперечисляемые).*/

let person = {
    name: "Muhammad",
    age: 20,
    gender:"male"};

let propNames = Object.getOwnPropertyNames(person);
console.log(propNames);
//Object.freeze(obj) замораживает объект
let person = {
  name: "Maryam",
  address: "Dushanbe"
}

Object.freeze(person)

person.name = "Amina"; //Не сработает
person.address = "Khujand"; // не Сработает!

console.log(person)
 


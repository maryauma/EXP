/*Object.defineProperty(obj, "propName", descriptor)-Это метод, который позволяет одновремен 
добавить или изменить ОДНО свойств у объекта, 
задавая для него свойства подробные характеристики*/ 

let user={};
Object.defineProperty(user,"name",{
    value: "Maryam",
    writable: false,//нельзя изменить value
    enumerable: true,
    configurable:false //нельзя удалить value
})
console.log(user.name)
// попытка изменить name
user.name="Amina"
console.log(user.name)// Maryam
//копируем объект user в новый объект
let another_user={
    age:18,
    height:160,
}
Object.assign(another_user,user)
console.log(another_user)

let student=Object.create(another_user)
console.log(another_user.name)
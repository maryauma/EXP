//Object.defineProperties(obj,props)-Это метод, который позволяет одновременно добавить 
// или изменить несколько свойств у объекта, 
// задавая для каждого свойства подробные характеристики 

let user={}
Object.defineProperties(user,{
   name:{ value: "Maryam",
    writable: false,//нельзя изменить value
    enumerable: false,
    configurable:false //нельзя удалить value
},age:{
    value:"18",
    writable: true,
    enumerable: false, 
    configurable:false 
}
})
console.log(user.age)
// попытка изменить name
user.name="Amina"
console.log(user.name)// Maryam
//копируем объект user в новый объект
let another_user=user
Object.defineProperties(another_user,{
    height:{value:"160",
        writable: true,
        enumerable:true,
        configurable:false},//нельзя удалить
    gender:{value:"female",
        writable:true,
        enumerable:true,
        configurable:true,// могу удалить
    }
})
console.log(another_user)
delete another_user.height//неудаляется
delete another_user.gender//удаляется
console.log("##########")
console.log(another_user)

if (Object.keys(user).length === 0) {
  console.log("Объект пустой");
} else {
  console.log("Объект не пустой");
}
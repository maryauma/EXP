//Object.entries() -превращает объект в массив ключ-значение
let animal = { 
    eat: "carrot",
    weight:4,
    height:"10 cm",
    habitat:"forest",
    name:"Gray",
    eat:"meat",
    colour:"gray"
 }// объект

 let wolf=Object.entries(animal)// массив (список значений)
 console.log(wolf)
 console.log("//////////")

 let user={}
Object.defineProperties(user,{
   name:{ value: "Maryam",
    writable: false,//нельзя изменить value
    enumerable: true,
    configurable:false //нельзя удалить value
},age:{
    value:"18",
    writable: true,
    enumerable: false, 
    configurable:false 
}
})

let girl=Object.entries(user)
console.log(girl)

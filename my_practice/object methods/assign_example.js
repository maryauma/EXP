//Object.assign() — это способ скопировать свойства из одного объекта в другой
console.log("")
let house={
    address:"Firdawsi 55/1",
    hs_square: "65 m^2",
    floor: 9,
    room_num:5,
    house_num:111,
}

let My_house={}
Object.assign(My_house,house)
console.log(My_house)

//или просто чтобы объединить объекты
console.log("")
let owner = {
    name: "Muhammad",
    age:"20",
    gander:"male",
    height: 180
}
Object.assign(owner,house)
console.log(owner)
//Если свойства совпадают — старое заменяется новым
console.log(" ")
let spouse_owner = {
    name: "Khadija",
    age:"40",
    gander:"female",
    religion: "islam"
}
Object.assign(owner,spouse_owner)
console.log(owner)
//Копирует поверхностно (внутренние объекты не клонируются глубоко)
console.log(" ")
let daughter = {
    name: "Maryam",
    age:"18",
    gander:"female",
    religion: "islam",
    extra_info:{
        her_study:"programming"},
}
Object.assign(spouse_owner,daughter)
console.log(spouse_owner)
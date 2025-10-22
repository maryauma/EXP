/*Object.create(obj) создаёт новый объект, у которого obj — прототип.
Сам объект при этом может быть пустым — свойства он «наследует»*/
let animal = { 
    eat: "carrot",
    weight:4,
    height:"10 cm"
 }
let rabbit = Object.create(animal);// animal-прототип(радитель)
console.log(rabbit.weight);
console.log("************");
//другой пример
let another_animal = { 
    habitat:"forest",
    name:"Gray",
    eat:"meat",
    colour:"gray",
}

let wolf=Object.create(another_animal)
console.log(wolf.colour)
delete another_animal.name
console.log(another_animal)

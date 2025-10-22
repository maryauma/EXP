const student={
    name: "Maryam",
    age:17,
    gender:"female",
    status: "student"
}
Object.seal(student)
student.height= 160
console.log(student)
console.log(Object.isFrozen(student))
console.log(Object.isSealed(student))
let student2={
    height: 160
}
//Object.assign(student,student2)// Error
console.log(student)
console.log(student.age + 2)

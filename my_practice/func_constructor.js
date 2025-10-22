function SayHello_Bye(name){
    this.name =name
    this.SayHello = function(){
        console.log("hello " + this.name)
    }
    this.SayBye=function(){
        console.log("bye " + this.name)
    }
    this.isMarayam= true
}
let user1 = new SayHello_Bye("Amina")
user1.SayHello()
user1.SayBye()
console.log(user1.isMarayam)
// let person={
//     firstname:"Erick",
//     lastname: "Migwi",
// }
// console.log(person.firstname)
// console.log("Hello world")
// console.log(57)
// let newArray = ["Martin","Rachael"] 
// let secondArray=["Sharon", "Migwi"]
// let full= newArray .concat (secondArray)
// full.reverse()
// console.log(full);
// newArray.push(37)
// newArray.unshift("Erick")
// console.log(newArray)
// let age= [23,22, 24, 69, 100,21,47,19]
// age.filter((a=> a))
// console.log(age);
// age.map(a=>{
//     return a + 5
// })
// console.log(sum(10 ,20))
// function sum(num1, num2){
//     let name= "Erick"
//     return num1 + num2+ name
// }
// let user = (sum1,sum2)=>{
//     return sum1+sum2
// }
// console.log(user(10,30));
 
// let time= "morning"
// switch (time){
//     case "morning":
//     console.log("Good morning")
//     break;
//     case "afternoon":
//         console.log("Good afternoon")
//         break;
//         default: 
//         console.log("Invalid time value");
    
// }
// let nme = 5
// let nne = 4
// if (nme===5){
//     console.log("Hello world");
// }
// let name= "Erick"
// // while loops
// let i =0;
// do{
// console.log(nme+nne+name)
// i++;
// }while(i<10)
// let c = 0
// while(c<10){
//     console.log("Hello");
//     c++
// }
// let values = [1,2,4,5,6,6,7,8,]
// for(let i=0; i<values.length; i++){
//     console.log(values[i])
// }
// str= "string"
// if(typeof str==='string'){
//     console.log("bye")
// }
// let laptop= {
//     Ram:"4gb DDR4",
//     HDD: "500gb",
//     CanRunOS: true,
//     nameOfOwner:"Erick Migwi",
//     TypeofOS:function(){
//         return "This Laptop is capable of running Windows 10pro, Windows 11 and Linux"}
// }
// let car= {
//     BrandName: "Tesla",
//     selfDrive: true,
//     isElectric: true,
//     Color: "Deep Blue Mettalic",
//     canBeSummoned: true,
//     canMove: function(){
//         return "The car is an AI controlled automobile, it can move for a range of 430Km on single battery charge"
//     }
// }
// // we can see the properties they have through console.log
// console.log("Properties of a lapatop: ")
// console.log("RAM size: "+ laptop.Ram)
// console.log("Can it ran an Operating System: "+ laptop.CanRunOS)

// console.log("Type of OS it can ran: " + laptop.TypeofOS())
// // The car object
// console.log("Brand name of the car: "+ car.BrandName)
// console.log("Is it capable of self drive: "+ car.selfDrive)
// console.log("How long can it move: "+ car.canMove())
function Laptop(nameOfOwner,RAM, HDD ,CanRunOS, TypeofOS){
    this.nameOfOwner=nameOfOwner;
    this.RAM=RAM;
    this.CanRunOS=CanRunOS;
    this.HDD=HDD;
    this.TypeofOS=TypeofOS;
}
const Laptop1=new Laptop("Erick Migwi", "6gb", true, "500gb","Windows 10" )
const Laptop2= new Laptop("Martin Wachira","16gb", true, "500gb", "Windows 10")
const Laptop3= new Laptop("Erica Wanja", "8gb", true, "500gb", "Windows 11")

console.log(Laptop2.RAM)
console.log(Laptop1.nameOfOwner)
console.log(Laptop3.TypeofOS)
console.log(Laptop1.CanRunOS)

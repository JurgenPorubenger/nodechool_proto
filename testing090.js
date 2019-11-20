// function Robot(){
//     this.__proto__ = Robot.prototype;
//     this.legs=2;
//     return this;
// }
//
// let robby = new Robot()
// console.log(Robot.__proto__);


function Robot() {
}
Robot.prototype.parts=[];
Robot.prototype.capabilities=[];

let robby = new Robot();
let cranky = new Robot();

robby.parts=['core'];
Robot.prototype.capabilities.push('fly');


console.log(cranky.parts);
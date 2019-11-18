function Robot(){
    this.__proto__ = Robot.prototype;
    this.legs=2;
    return this;
}
// function Vehicle(){
// }
let robby = new Robot()
console.log(robby.legs);
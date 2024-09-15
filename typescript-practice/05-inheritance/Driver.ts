import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";


let myShape = new Shape(10, 25);
let myCircle = new Circle(5, 5, 30);
let myRectangle = new Rectangle(0,0,4,10);

console.log(myShape.getInfo())
console.log("----------")
console.log(myCircle.getInfo())
console.log("----------")
console.log(myRectangle.getInfo())

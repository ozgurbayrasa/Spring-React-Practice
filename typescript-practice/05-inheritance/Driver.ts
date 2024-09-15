import { Shape } from "./Shape";
import { Circle } from "./Circle";


let myShape = new Shape(10, 25);
let myCircle = new Circle(5, 5, 30);

console.log(myShape.getInfo())
console.log("----------")
console.log(myCircle.getInfo())

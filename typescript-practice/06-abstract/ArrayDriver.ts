import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";


let shapesArray : Shape[] = [];

shapesArray.push(new Rectangle(10,15, 5, 5));
shapesArray.push(new Circle(10,15, 30));

for(let tempShape of shapesArray){
    console.log(tempShape.getInfo());
    console.log(`Calculated Area: ${tempShape.calculateArea()}`)
}

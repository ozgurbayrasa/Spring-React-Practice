"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var shapesArray = [];
shapesArray.push(new Rectangle_1.Rectangle(10, 15, 5, 5));
shapesArray.push(new Circle_1.Circle(10, 15, 30));
for (var _i = 0, shapesArray_1 = shapesArray; _i < shapesArray_1.length; _i++) {
    var tempShape = shapesArray_1[_i];
    console.log(tempShape.getInfo());
    console.log("Calculated Area: ".concat(tempShape.calculateArea()));
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var myShape = new Shape_1.Shape(10, 25);
var myCircle = new Circle_1.Circle(5, 5, 30);
console.log(myShape.getInfo());
console.log("----------");
console.log(myCircle.getInfo());

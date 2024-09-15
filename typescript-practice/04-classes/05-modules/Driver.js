"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import Customer class from Customer.ts file.
var Customer_1 = require("./Customer");
// Let's create an instance.
var myCustomer = new Customer_1.Customer("Ozgur", "Bayrasa");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

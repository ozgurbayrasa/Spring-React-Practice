"use strict";
// Let's define a Customer class.
class Customer {
    // Constructor with parameters.
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    // Getter and Setter Accessors.
    // Default modifier is 'public'.
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
// Let's create an instance.
let myCustomer = new Customer("Ozgur", "Bayrasa");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

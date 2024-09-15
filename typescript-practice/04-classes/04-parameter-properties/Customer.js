"use strict";
// Let's define a Customer class.
var Customer = /** @class */ (function () {
    // Constructor with parameter properties.
    function Customer(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        // Getter and Setter Accessors.
        // Default modifier is 'public'.
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
// Let's create an instance.
var myCustomer = new Customer("Ozgur", "Bayrasa");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

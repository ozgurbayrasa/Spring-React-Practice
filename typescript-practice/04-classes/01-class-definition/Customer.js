// Let's define a Customer class.
var Customer = /** @class */ (function () {
    // Constructor with parameters.
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
// Let's create an instance.
var myCustomer = new Customer("Ozgur", "Bayrasa");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

// Let's define a Customer class.

class Customer {
    firstName: string;
    lastName: string;

    // Constructor with parameters.
    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// Let's create an instance.
let myCustomer = new Customer("Ozgur", "Bayrasa");

console.log(myCustomer.firstName)
console.log(myCustomer.lastName)


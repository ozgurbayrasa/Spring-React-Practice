// Let's define a Customer class.

class Customer {

    // Private access modifiers.
    // Naming convention for fields "_fieldName".
    private _firstName: string;
    private _lastName: string;

    

    // Constructor with parameters.
    constructor(firstName: string, lastName: string){
        this._firstName = firstName;
        this._lastName = lastName;
    }

    // Getter and Setter Accessors.

    // Default modifier is 'public'.
    get firstName(): string{
        return this._firstName;
    }

    set firstName(value: string){
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
    
}

// Let's create an instance.
let myCustomer = new Customer("Ozgur", "Bayrasa");

console.log(myCustomer.firstName)
console.log(myCustomer.lastName)


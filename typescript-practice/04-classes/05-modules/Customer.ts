// Let's define a Customer class.

export class Customer {

    // Constructor with parameter properties.
    constructor(private _firstName: string, private _lastName: string){
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

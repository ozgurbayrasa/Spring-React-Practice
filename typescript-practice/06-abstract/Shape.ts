export abstract class Shape{
    
    // Simplified constructor.
    constructor(private _x: number, private _y: number){}

    // Getter & Setters
    get y(): number {
        return this._y;
    }
    set y(value: number) {
        this._y = value;
    }
    
    get x(): number {
        return this._x;
    }
    set x(value: number) {
        this._x = value;
    }

    // Get info method.
    getInfo() : string {
        return `x: ${this._x}\ny: ${this._y}`
    }

    // Abstract method.
    abstract calculateArea(): number;
    
}
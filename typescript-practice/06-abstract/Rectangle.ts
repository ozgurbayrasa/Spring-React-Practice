import { Shape } from "./Shape";

export class Rectangle extends Shape{
    

    constructor(x: number, y: number, 
                private _width: number, private _length: number){
        super(x,y);
    }

    // Getters & Setters
    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }

    public get length(): number {
        return this._length;
    }
    public set length(value: number) {
        this._length = value;
    }

    getInfo(): string {
        return super.getInfo() + `\nLength: ${this._length} \nWidth: ${this._width}`
    }

    calculateArea(): number {
        return this._width * this._length;
    }
}
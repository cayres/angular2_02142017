export class Car {

    public make: string;
    public model: string;
    public year: number;
    public color: string;
    public price: number;

    constructor() {
        this.make = "";
    }

    public getInfo() {

        if (this.year < 2004) {
            return "you need to buy a new car";
        }

        return `${this.make} ${this.model} ${this.year}`;
    }
}

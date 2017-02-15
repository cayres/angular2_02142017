import { Injectable } from "@angular/core";

import { Car } from "../models/car";

@Injectable()
export class Cars {

    private cars: Car[];

    constructor() {

        const car1 = new Car();
        car1.make = "Toyota";
        car1.model = "Sienna";
        car1.year = 2004;
        car1.color = "light blue";
        car1.price = 15000;

        const car2 = new Car();
        car2.make = "Honda";
        car2.model = "Sienna";
        car2.year = 2004;
        car2.color = "light blue";
        car2.price = 15000;

        const car3 = new Car();
        car3.make = "Ford";
        car3.model = "Sienna";
        car3.year = 2004;
        car3.color = "light blue";
        car3.price = 15000;


        this.cars = [ car1, car2, car3 ];
    }

    public insert(car: Car) {
        this.cars = this.cars.concat(car);
    }

    public getAll() {
        return this.cars;
    }
}
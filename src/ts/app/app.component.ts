import { Component, OnInit } from "@angular/core";

import { Cars } from "./services/cars.service";

// advanced stuff
// http://www.t4d.io/angular-2-ngfor-over-a-series-of-elements/


@Component({
    selector: "widget-tool",
    template: `
        <item-list [items]="carMakes"></item-list>
    `,
    providers: [ Cars ],
})
export class AppComponent implements OnInit {

    public appCaption: string = "Car Tool";
    public carMakes: string[] = [];

    // private cars: Cars;

    // constructor(cars: Cars) {
    //     this.cars = cars;
    // }

    constructor(private cars: Cars) { }

    public ngOnInit() {
        this.carMakes = this.cars.getAll().map((car) => car.make);
    }
}
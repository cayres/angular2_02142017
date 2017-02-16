import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";

import { Cars } from "./services/cars.service";

// advanced stuff
// http://www.t4d.io/angular-2-ngfor-over-a-series-of-elements/

interface Author {
    id: number;
    firstName: string;
    lastName: string;
}


@Component({
    selector: "widget-tool",
    template: require("./app.component.html"),
    providers: [ Cars ],
})
export class AppComponent implements OnInit {

    public appCaption: string = "Car Tool";
    public carMakes: string[] = [];
    public authorNames: string[] = [];

    // private cars: Cars;

    // constructor(cars: Cars) {
    //     this.cars = cars;
    // }

    constructor(private cars: Cars, private http: Http) { }

    public ngOnInit() {
        // this.carMakes = this.cars.getAll().map((car) => car.make);

        // this.http.get("http://localhost:3010/authors")
        //     .map((res) => res.json()).subscribe((authors: Author[]) => {
        //         this.authorNames = authors.map((author: Author) =>
        //             author.firstName + " " + author.lastName);
        //     });

        this.http.get("http://localhost:3010/authors")
            .toPromise().then((res) => res.json())
            .then((authors: Author[]) => {
                this.authorNames = authors.map((author: Author) =>
                    author.firstName + " " + author.lastName);
            })
    }
}
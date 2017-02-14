import { Component } from "@angular/core";

@Component({
    selector: "widget-tool",
    template: "<h1>{{message | myUpperCase}}</h1>",
})
export class AppComponent {

    public message: number = 12; //: string = "Hello World!";

}

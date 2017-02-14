import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { MyUpperCasePipe } from "./pipes/my-upper-case.pipe";

@NgModule({
    imports: [ BrowserModule],
    declarations: [ AppComponent, MyUpperCasePipe ],
    bootstrap: [ AppComponent ],
})
export class AppModule { }


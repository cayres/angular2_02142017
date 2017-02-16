import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { ItemList } from "./components/item-list.component";
import { ColorForm } from "./components/color-form.component";

import { MyUpperCasePipe } from "./pipes/my-upper-case.pipe";

@NgModule({
    imports: [ BrowserModule, FormsModule, HttpModule ],
    declarations: [ AppComponent, MyUpperCasePipe, ItemList, ColorForm ],
    bootstrap: [ AppComponent ],
})
export class AppModule { }

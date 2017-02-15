import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "color-form",
    template: `
        <form>
            <div>
                <label for="new-color-input">New Color:</label>
                <input type="text" id="new-color-input" name="newColorInput" [(ngModel)]="newColor">
            </div>
            <button type="button" (click)="addNewColor()">Add Color</button>
        </form>
    `,
})
export class ColorForm {

    public newColor: string = "default color";

    @Output()
    public colorSubmitted: EventEmitter<string> = new EventEmitter<string>();

    public addNewColor() {
        this.colorSubmitted.emit(this.newColor);
    }
}
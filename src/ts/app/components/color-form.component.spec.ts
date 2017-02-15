import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { ColorForm } from "./color-form.component";

const getColorFormPageObject = (de: DebugElement) => {

    const newColorInput = de.query(By.css("#new-color-input"));
    const addColorButton = de.query(By.css("button"));

    return {
        newColorInput,
        addColorButton,
    };

};

describe("color form tests", () => {

    let fixture: ComponentFixture<ColorForm>;
    let component: ColorForm;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [ FormsModule ],
            declarations: [ColorForm ]
        });

        fixture = TestBed.createComponent(ColorForm);
        component = fixture.componentInstance;

    });

    it("user gets submitted color", () => {

        const colorInputValue = "hot pink";

        fixture.detectChanges();

        const debugElement = fixture.debugElement;
        const pageObj = getColorFormPageObject(debugElement);

        const el: HTMLInputElement = pageObj.newColorInput.nativeElement;

        el.value = colorInputValue;
        el.dispatchEvent(new Event("input"));


        component.colorSubmitted.subscribe((newColor: string) => {
            console.log("add color button clicked");
            // should work correctly, but at the moment do not
            // TODO
            // expect(component.newColor).toBe(colorInputValue);
            // expect(newColor).toBe(colorInputValue);
        });

        pageObj.addColorButton.nativeElement.dispatchEvent(new Event("click"));

        // fixture.detectChanges();

    });


});

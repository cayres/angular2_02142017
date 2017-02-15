import { TestBed, ComponentFixture } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

import { ItemList } from "./item-list.component";

describe("item list component tests", () => {

    let fixture: ComponentFixture<ItemList>;
    let component: ItemList;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {

        TestBed.configureTestingModule({
            declarations: [ ItemList ],
        });

        fixture = TestBed.createComponent(ItemList);
        component = fixture.componentInstance;
        de = fixture.debugElement.query(By.css("ul"));
        el = de.nativeElement;

    });

    it("item list populated", () => {

        component.items = [ "item 1", "item 2", "item 3" ];
        fixture.detectChanges();

        expect(component.items.length).toBe(3);
    });

    it("item list ui built correctly", () => {

        component.items = [ "item 1", "item 2", "item 3" ];
        fixture.detectChanges();

        expect(el.childElementCount).toBe(3);
    });

});
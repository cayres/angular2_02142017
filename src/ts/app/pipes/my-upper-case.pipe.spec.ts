import { MyUpperCasePipe } from "./my-upper-case.pipe";

describe("make string upper case", () => {

    it("upper case string", () => {

        const pipe = new MyUpperCasePipe();

        const expectedValue = "HELLO";
        const actualValue = pipe.transform("hello");

        expect(actualValue).toBe(expectedValue);
        expect(actualValue).not.toBe("hello");
    });


});
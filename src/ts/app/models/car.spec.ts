import { Car } from "./car";

describe("user managing cars", () => {

    it("car shape", () => {

        const c = new Car();
        expect(c.make).toBeDefined();
        expect(c.getInfo).toBeDefined();
        expect(typeof c.getInfo).toBe("function");

    });

    it("user gets car info", () => {

        const c = new Car();
        c.make = "Toyota";
        c.model = "Sienna";
        c.year = 2004;
        c.color = "light blue";
        c.price = 15000;

        const expectedValue = "Toyota Sienna 2004";
        const actualValue = c.getInfo();

        expect(actualValue).toBe(expectedValue);
    });

    it("user gets car info for old car", () => {

        const c = new Car();
        c.make = "Toyota";
        c.model = "Sienna";
        c.year = 2002;
        c.color = "light blue";
        c.price = 15000;

        const expectedValue = "you need to buy a new car";
        const actualValue = c.getInfo();

        expect(actualValue).toBe(expectedValue);

    });


});

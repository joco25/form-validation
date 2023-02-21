import Course from "../course";

describe("Course", ()=>{
    test("it returns true when valid string is given", ()=>{
        const result = new Course("Hello111 spring 2022");
        expect(result.isValid).toBe(true);
    });
    test("it returns false when invalid string is given", ()=>{
        const result = new Course("Hello111");
        expect(result.isValid).toBe(false);
    });
});
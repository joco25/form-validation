import { normalizeAndVerifySemester, normalizeYear } from "../utils";
import testValues from "./mocks/couse-mock-constants.json"

describe("normalizeAndVerifySemester", ()=>{
    test("it returns semester in proper case when given shorthand",()=>{
        const testValue = testValues.normalizeAndVerifySemester1;
        const result = normalizeAndVerifySemester(testValue.testString);
        expect(result).toEqual(testValue.expectedOutput)
    });
    test("it returns false when given an invalid semester",()=>{
        const testValue = testValues.normalizeAndVerifySemester2;
        const result = normalizeAndVerifySemester(testValue.testString);
        expect(result).toEqual(testValue.expectedOutput)
    });
});

describe("normalizeYear", ()=>{
    test("it adds 20 in front of a two character number string",()=>{
        const testValue = testValues.normalizeYear1;
        const result = normalizeYear(testValue.testString);
        expect(result).toEqual(testValue.expectedOutput)
    });
    test("it four character number strings",()=>{
        const testValue = testValues.normalizeYear1;
        const result = normalizeYear(testValue.testString);
        expect(result).toBe(testValue.expectedOutput)
    });
});
import { validateDeptAndCourseNumber, validateYearAndSeason } from "../validators";
import testValues from "./mocks/couse-mock-constants.json"

describe("ValidateYearAndSemester", ()=>{
    test("it returns object with year and semester when given a valid input",()=>{
        const testValue = testValues.yearAndSemesterTest1;
        const result = validateYearAndSeason(testValue.testString);
        expect(result).toEqual(testValue.expectedOutput)
    })
    test("it returns false when given an invalid string",()=>{
        const testValue = testValues.yearAndSemesterTest2;
        const result = validateYearAndSeason(testValue.testString);
        expect(result).toEqual(testValue.expectedOutput)
    })
    
    test("it returns correct values in an alternate order",()=>{
        const testValue = testValues.yearAndSemesterTest3;
        const result = validateYearAndSeason(testValue.testString);
        expect(result).toEqual(testValue.expectedOutput)
    })
    test("it returns false when given a invalid Semester",()=>{
        const testValue = testValues.yearAndSemesterTest4;
        const result = validateYearAndSeason(testValue.testString);
        expect(result).toEqual(testValue.expectedOutput)
    })
    test("it returns false when given a invalid Year",()=>{
        const testValue = testValues.yearAndSemesterTest4;
        const result = validateYearAndSeason(testValue.testString);
        expect(result).toEqual(testValue.expectedOutput)
    })
});

describe("validateDeptAndCourseNumber", ()=>{
    test("it returns object with department and courseNumber when given a valid input",()=>{
        const testValue = testValues.departmentAndCourseNumberTest1;
        const result = validateDeptAndCourseNumber(testValue.testString);
        expect(result).toEqual(testValue.expectedOutput)
    })
    test("it returns false when given a invalid input",()=>{
        const testValue = testValues.departmentAndCourseNumberTest2;
        const result = validateDeptAndCourseNumber(testValue.testString);
        expect(result).toEqual(testValue.expectedOutput)
    })
    
    test("it returns object with department and courseNumber when given a valid input with an accepted delimiter",()=>{
        const testValue = testValues.departmentAndCourseNumberTest3;
        const result = validateDeptAndCourseNumber(testValue.testString);
        expect(result).toEqual(testValue.expectedOutput)
    })
    test("it returns false when given a valid input with an invalid delimiter",()=>{
        const testValue = testValues.departmentAndCourseNumberTest4;
        const result = validateDeptAndCourseNumber(testValue.testString);
        expect(result).toEqual(testValue.expectedOutput)
    })

});
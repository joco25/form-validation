import { ICourseDetails, IDepartmentAndCourseNumber, IYearAndSeason } from "./course.interface";
import { normalizeAndVerifySemester, normalizeYear } from "./utils";

/**
 * This validates the entire course string
 * @param value string;
 * @returns ICourseDetails | Boolean
 */
const validateEntireCourseString =(value: string):ICourseDetails|boolean =>{
    // split string with white space
    const courseParts = value.split(" ");
    if(courseParts.length < 2){
        return false;
    }

    let processedDepartmentAndCourseNumber;
    let processedYearandSemester;

    // check the first segment for numbers
    const regex: RegExp = /\d/;
    if (regex.test(courseParts[0])) {
        // if it contains numbers, then call validate Course&Department on the first index and then call validate Year&Season on what's left of the array
        processedDepartmentAndCourseNumber = validateDeptAndCourseNumber(courseParts[0]);
        processedYearandSemester = validateYearAndSeason(courseParts.slice(1).join(" "));
    } else {
        /* Else, it means the department and course covers the first two indexes, so call validate course and department on a join of the first and the second index 
        Then call validate Year & Season on what's left of the array. */
        processedDepartmentAndCourseNumber = validateDeptAndCourseNumber(courseParts.slice(0,2).join(" "));
        processedYearandSemester = validateYearAndSeason(courseParts.slice(2).join(" "));
    }

    return typeof processedDepartmentAndCourseNumber === "object" && typeof processedYearandSemester === "object" ? { ...processedDepartmentAndCourseNumber, ...processedYearandSemester } : false;
}

/**
 * This method validates a department and a course number pair.
 * @param deptAndCourseNumber: string
 * @returns boolean | IDepartmentAndCourseNumber
 */
const validateDeptAndCourseNumber=(deptAndCourseNumber:string):IDepartmentAndCourseNumber|boolean=>{
    const delimiters: RegExp = /-|:|\s+/; // Regular expression to match "-", ":", or any whitespace character
    const departmentPattern = "([A-Za-z]+)";
    const courseNumberPattern = "(\\d+)";

    if (delimiters.test(deptAndCourseNumber)) {
        const [department, courseNumber] = deptAndCourseNumber.split(delimiters);
        if(courseNumber.match(new RegExp(`^${courseNumberPattern}$`)) && department.match(new RegExp(`^${departmentPattern}$`))){
            return {department: department.toUpperCase(), courseNumber: parseInt(courseNumber)};
        }
        return false;
    }else{
        // find if sequence matches a valid combination
        const deptCourseNumberSequence: RegExp = new RegExp(`^${departmentPattern}${courseNumberPattern}$`);
        const result = deptAndCourseNumber.match(deptCourseNumberSequence);
        
        if(result === null) return false;
        return {department: result[1]?.toUpperCase(), courseNumber: parseInt(result[2])};
    }
}

/**
 * This method is used to validate a year and season pair
 * @param yearAndSeason string
 * @returns boolean | IYearAndSeason
 */
const validateYearAndSeason=(yearAndSeason:string):IYearAndSeason|boolean=>{
    const spaceDelimeter: RegExp = /\s+/g;
    const cleanedUpYearAndSeason = yearAndSeason.replace(spaceDelimeter, "");

    let semesterResult:string|boolean = false;
    let yearResult: number|Boolean = false;
    
    // Possible patterns
    const yearAndSeasonPattern1: RegExp = /^([A-Za-z]+)(\d{2}|\d{4})$/; // This matches where the semester comes before the year
    const yearAndSeasonPattern2: RegExp = /^(\d{2}|\d{4})([A-Za-z]+)$/; // This matches where the year comes before the semester
    
    if(yearAndSeasonPattern1.test(cleanedUpYearAndSeason)){
        const result = cleanedUpYearAndSeason.match(yearAndSeasonPattern1);
        if(result === null) return false;
        const [,semester, year] = result;

        
        semesterResult = normalizeAndVerifySemester(semester);
        yearResult = normalizeYear(year);
    }else if(yearAndSeasonPattern2.test(cleanedUpYearAndSeason)){
        const result = cleanedUpYearAndSeason.match(yearAndSeasonPattern2);
        if(result === null) return false;
        const [,year, semester] = result;
        
        semesterResult = normalizeAndVerifySemester(semester);
        yearResult = normalizeYear(year);
    }else{
        return false;
    }

    return typeof yearResult === "number" && typeof semesterResult === "string" ? {semester: semesterResult, year: yearResult} : false;
}

export {
    validateEntireCourseString,
    validateYearAndSeason,
    validateDeptAndCourseNumber
}
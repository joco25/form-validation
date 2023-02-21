import { ICourse } from "./course.interface";
import { validateEntireCourseString } from "./validators";

class Course implements ICourse{
    isValid: boolean | null;
    errorMsg: string;
    courseString: string;
    details?: {
        department: string;
        courseNumber: number;
        year: number;
        semester: string;
    };

    constructor(value:string){
        this.isValid = false;
        this.courseString = value;
        this.errorMsg = "";
        this.validateCourseString();
    }

    validateCourseString =()=>{
        const value = validateEntireCourseString(this.courseString);
        if(value && typeof value === "object"){
            this.details = value;
            this.isValid = true;
            this.errorMsg = "";
        }else{
            this.isValid = false;
            this.details = undefined;
            this.errorMsg = "Error: Could not parse course"
        }
    }
}

export default Course;
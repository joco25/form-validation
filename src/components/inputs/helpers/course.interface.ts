
export interface IDepartmentAndCourseNumber{
    department: string;
    courseNumber: number;
}

export interface IYearAndSeason{
    year: number;
    semester: string;
}

export interface ICourseDetails extends IDepartmentAndCourseNumber, IYearAndSeason{}

export interface ICourse{
    isValid: boolean | null;
    errorMsg: string;
    courseString: string;
    details?: ICourseDetails;
}
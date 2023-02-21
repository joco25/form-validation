const normalizeYear =(value: string):number=>{
    if(value.length === 2){
        return parseInt(`20${value}`)
    }
    return parseInt(value);
}

const normalizeAndVerifySemester=(value: string):(string|boolean)=>{
    switch (value.toLowerCase()) {
        case "f":
        case "fall":
            return "Fall";
        case "w":
        case "winter":
            return "Winter";
        case "s":
        case "spring":
            return "Spring";
        case "su":
        case "summer":
            return "Summer";
        default:
           return false;
    }
}

export {normalizeYear, normalizeAndVerifySemester};
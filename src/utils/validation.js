export default class StudentValidation {
    constructor() { }
    validateName(name) {
        if (name.length === 1) return false;
        for (let c of name) if ("0123456789!@#$%^&*(){}[]/?<>~;:,.\\|".includes(c)) return false;
        return true;
    }
    validateCourse(courseNumber) {
        if (typeof courseNumber !== 'number') return false;
        if (courseNumber < 1 || courseNumber > 4) return false;
        if (courseNumber !== parseInt(courseNumber)) return false;
        return true;
    }
}
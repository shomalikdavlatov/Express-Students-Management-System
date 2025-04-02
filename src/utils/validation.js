export default class StudentValidation {
    constructor() { }
    validateName(name) {
        if (name.length === 1) return "The firstname or lastname must not be empty!";
        for (let c of name) if ("0123456789!@#$%^&*(){}[]/?<>~;:,.\\|".includes(c)) return "The firstname or lastname must be only in English letters!";
    }
    validateCourse(courseNumber) {
        if (typeof courseNumber !== 'number') return "The data type of course must be number!";
        if (courseNumber < 1 || courseNumber > 4) return "The course number must be one of these: 1, 2, 3, 4!";
        if (courseNumber !== parseInt(courseNumber)) return "The course number must be integer not float!";
    }
}
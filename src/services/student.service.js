import Io from './../utils/io.js';
import StudentValidation from './../utils/validation.js';


export default class StudentService {
    constructor() {
        this.io = new Io();
        this.validation = new StudentValidation();
    }
    async getAllStudents() {
        const students = await this.io.readFile('students.json');
        return students;
    }
    async getFilteredStudents(filter) {
        let students = await this.getAllStudents();
        if (filter.course) students = students.filter(element => element.course === +filter.course );
        if (filter.faculty) students = students.filter(element => element.faculty === filter.faculty);
        if (filter.sort === 'firstName') students = students.sort((a, b) => a.firstName.localeCompare(b.firstName));
        if (filter.sort === 'lastName') students = students.sort((a, b) => a.lastName.localeCompare(b.lastName));
        return students;
    }
    async getStudentById(id) {
        const students = await this.io.readFile('students.json');
        const student = students.find((element) => element.id === id);
        if (!student) throw Error('Student is not found!');
        return student;
    }
    async createStudent(data) { 
        const { firstName, lastName, course, faculty } = data;
        const firstNameValidation = this.validation.validateName(firstName);
        const lastNameValidation = this.validation.validateName(lastName);
        const courseValidation = this.validation.validateCourse(course);
        if (firstNameValidation) throw Error(firstNameValidation);
        if (lastNameValidation) throw Error(lastNameValidation);
        if (courseValidation) throw Error(courseValidation);
        const students = await this.getAllStudents();
        const student = {
            id: students.length > 0 ? students.at(-1).id + 1 : 1,
            firstName,
            lastName,
            course,
            faculty
        };
        students.push(student);
        this.io.writeFile('students.json', students);
    }
    async updateStudent(id, data) {
        const { firstName, lastName, course, faculty } = data;
        if (firstName) this.validation.validateName(firstName);
        if (lastName) this.validation.validateName(lastName);
        if (course) this.validation.validateCourse(course);
        let students = await this.getAllStudents();
        students = students.map((element) => {
            if (element.id === id) {
                return {
                    id: element.id,
                    firstName: firstName ? firstName : element.firstName,
                    lastName: lastName ? lastName : element.lastName,
                    course: course ? course : element.course,
                    faculty: faculty ? faculty : element.faculty
                }
            }
            return element;
        });
        this.io.writeFile('students.json', students);
    }
    async deleteStudent(id) {
        let students = await this.getAllStudents();
        students = students.filter((element) => element.id !== id);
        this.io.writeFile("students.json", students);
    }
}
import StudentService from './../services/student.service.js';


export default class StudentController {
    constructor() {
        this.studentService = new StudentService();
    }
    async getAllStudents(req, res) {
        try {
            const students = await this.studentService.getAllStudents()
            res.status(200).json(students);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    async getFilteredStudents(req, res) {
        try {
            const students = await this.studentService.getFilteredStudents(req.query);
            res.status(200).json(students);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    async getStudent(req, res) {
        try {
            const student = await this.studentService.getStudentById(+req.params.id);
            res.status(200).json(student);
        }
        catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
    async get(req, res) {
        try {
            if (JSON.stringify(req.params) !== "{}") await this.getStudent(req, res);
            else if (JSON.stringify(req.query) !== "{}") await this.getFilteredStudents(req, res);
            else await this.getAllStudents(req, res);
        }   
        catch (error) {
            res.status(500).json({ message: error.message });
        } 
    }
    async createStudent(req, res) {
        try {
            await this.studentService.createStudent(req.body);
            res.status(201).json({ message: "Student has been created successfully" });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    async updateStudent(req, res) {
        try {
            await this.studentService.updateStudent(+req.params.id, req.body);
            res.status(200).json({ message: "Student information has been updated successfully" });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    async deleteStudent(req, res) {
        try {
            await this.studentService.deleteStudent(+req.params.id);
            res.status(200).json({ message: "Student has been deleted successfully" });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}
import StudentController from './../controllers/student.controller.js';
import { Router } from 'express';

const router = new Router();
const controller = new StudentController();

router.get('/api/students', (req, res) => controller.get(req, res));
router.get('/api/students/:id', (req, res) => controller.get(req, res));
router.post('/api/students', (req, res) => controller.createStudent(req, res));
router.put('/api/students/:id', (req, res) => controller.updateStudent(req, res));
router.delete('/api/students/:id', (req, res) => controller.deleteStudent(req, res));

export default router;
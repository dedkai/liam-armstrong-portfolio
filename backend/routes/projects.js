import { Router } from 'express';
import {
  getAllProjects,
  getProjectById,
  addProject,
  updateProject,
  deleteProject,
} from '../controllers/projectsController.js';

const router = Router();

router.get('/', getAllProjects);
router.get('/:id', getProjectById);
router.post('/', addProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

export default router;

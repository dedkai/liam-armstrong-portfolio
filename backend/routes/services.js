import { Router } from 'express';
import {
  getAllServices,
  getServiceById,
  addService,
  updateService,
  deleteService,
} from '../controllers/servicesController.js';

const router = Router();

router.get('/', getAllServices);
router.get('/:id', getServiceById);
router.post('/', addService);
router.put('/:id', updateService);
router.delete('/:id', deleteService);

export default router;

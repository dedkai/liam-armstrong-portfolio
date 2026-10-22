import { Router } from 'express';
import {
  getAllReferences,
  getReferenceById,
  addReference,
  updateReference,
  deleteReference,
} from '../controllers/referencesController.js';

const router = Router();

router.get('/', getAllReferences);
router.get('/:id', getReferenceById);
router.post('/', addReference);
router.put('/:id', updateReference);
router.delete('/:id', deleteReference);

export default router;

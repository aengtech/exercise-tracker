import express from 'express';

import { getExercises, addExercise, getExercise, updateExercise, deleteExercise } from '../controlller/exercise.js';

const router = express.Router();

router.get('/', getExercises);
router.post('/add', addExercise);
router.get('/:id', getExercise);
router.post('/update/:id', updateExercise);
router.delete('/:id', deleteExercise);

export default router; 
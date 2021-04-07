import express from 'express';

import { getUser, addUser } from '../controlller/users.js';

const router = express.Router();

router.get('/', getUser);
router.post('/add', addUser);

export default router;
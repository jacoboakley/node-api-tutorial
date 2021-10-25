import express from "express";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/users.js";

const router = express.Router();

router.get('/', getUsers);
router.get('/:userId', getUser);
router.post('/', createUser);
router.patch('/:userId', updateUser);
router.delete('/:userId', deleteUser);

export default router;
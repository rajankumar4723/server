import express from 'express';

import { RegisterUser } from "../controllers/user.js";
const router = express.Router();

router.post("/user", RegisterUser);

export default router;

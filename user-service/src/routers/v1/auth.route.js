import express from 'express';

import UserService from "../../api/user.api.js";

const authRouter = express.Router();

authRouter.post('/login', UserService.login);

export default authRouter;

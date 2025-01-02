import express from 'express';

import AuthService from '../../api/auth.api.js';

const authRouter = express.Router();

authRouter.post('/login', AuthService.login);

export default authRouter;

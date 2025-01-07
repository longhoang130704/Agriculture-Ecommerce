import express from 'express';
import UserService from '../../api/user.api.js';

// Auth Middleware
import authentication from '../../middlewares/authentication.middleware.js';
import authorization from '../../middlewares/authorization.middleware.js';

const userRouter = express.Router();

userRouter.get('/restore/:userId', authentication, authorization(['admin']), UserService.restore);
userRouter.get('/destroy/:userId', authentication, authorization(['admin']), UserService.destroy);
userRouter.get('/:userId', authentication, UserService.getUserById);
userRouter.put('/:userId', authentication, UserService.updateUserById);
userRouter.delete('/:userId', authentication, authorization(['admin']), UserService.deleteUserById);
userRouter.post('/', UserService.createUser);
userRouter.get('/', authentication, authorization(['admin']), UserService.getAllUser);

export default userRouter;

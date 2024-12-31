import express from 'express';
import UserService from '../../api/user.api.js';
const userRouter = express.Router();

userRouter.get('/restore/:userId', UserService.restore);
userRouter.get('/destroy/:userId', UserService.destroy);
userRouter.get('/:userId', UserService.getUserById);
userRouter.put('/:userId', UserService.updateUserById);
userRouter.delete('/:userId', UserService.deleteUserById);
userRouter.post('/', UserService.createUser);
userRouter.get('/', UserService.getAllUser);

export default userRouter;

import authRouter from './auth.route.js'; // Import authRouter
import userRouter from './user.route.js'; // Import userRouter

const initRouter = (app) => {
    // Group user routes
    app.use('/api/user', userRouter);

    // Group authentication routes
    app.use('api/auth', authRouter);
}

export default initRouter;

import authRouter from './auth.route.js'; // Import authRouter
import supplierRouter from './supplier.route.js'; // Import supplierRouter

const initRouter = (app) => {
    // Group supplier routes
    app.use('/api/supplier', supplierRouter);

    // Group authentication routes
    app.use('/api/auth', authRouter);
}

export default initRouter;

import dotenv from 'dotenv';
import express from 'express';

import { connectMongoDB } from '../db/config.js';
import initBaseMiddleware from '../middlewares/base.middleware.js';

dotenv.config();
const port = process.env.PORT;
const app = express();

const initServer = () => {
    initBaseMiddleware(app, express);

    connectMongoDB();



    app.listen(port, () => {
        console.log(`user-service is running on http://localhost:${port}`)
    })
}



export default initServer;

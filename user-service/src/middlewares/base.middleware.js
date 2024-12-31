import bodyParser from 'body-parser'
import cors from 'cors'

const initBaseMiddleware = (app, express) => {
    app.use(express.json())
    app.use(bodyParser.json())
    app.use(cors())
    app.use(express.urlencoded({ extended: true }))
}


export default initBaseMiddleware;

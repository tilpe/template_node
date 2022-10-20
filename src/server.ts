import express, {Request, Response} from "express";
import path from "path";
import mustache from "mustache-express";
import dotenv from 'dotenv';
import router from './routers/';

dotenv.config();

const server = express();

server
    .set('view engine', 'mustache')
    .set('views', path.join(__dirname,'views'))
    .engine('mustache',mustache())
    .use(express.urlencoded({extended: true}))
    .use(router)
    .use((req: Request, res: Response) => {
        res.status(404).send('404')
    })
    .listen(process.env.PORT)

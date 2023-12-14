import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";

const app: Application = express();


// global middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', function (req: Request, res: Response, next: NextFunction) {
    res.send('hello world'); 
})

export default app;
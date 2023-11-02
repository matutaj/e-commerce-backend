import express from "express";
import { Request, Response, NextFunction } from "express";
import cors from "cors"
import "express-async-errors"

import AppErrorHandler from "./errors/errorhandler";

import { routes } from "./routes";


const app = express();

const port = process.env.PORT || 3333;

app.use((req: Request, res: Response, next: NextFunction) => {

    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Content-Type,Authorization")
    app.use(cors(
        {

            methods: ["GET", "POST", "PUT", "DELETE"],
            credentials: true
        }
    ));


    next();
})
app.use(express.json());

app.use(routes)


app.use(AppErrorHandler);

app.listen(Number(port), () => {
    console.log("Server Running...");
});
import express from "express";

const port = process.env.PORT || 3333;
import { routes } from "./routes";
const app = express();


app.use(express.json());

app.use(routes)

app.listen(Number(port), () => {
    console.log("Server Running...");
});
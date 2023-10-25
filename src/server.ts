import express from "express";

const port = process.env.PORT || 3333;

const app = express();


app.use(express.json());

app.listen(Number(port), () => {
    console.log("Server Running...");
});
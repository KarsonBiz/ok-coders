import express from "express";
import { connectToDatabase } from "./db/database";
import rootRouter from "./routes/root";

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectToDatabase();

app.use("/", rootRouter);

export default app;

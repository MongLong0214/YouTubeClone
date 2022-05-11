import express from "express";

import { registerRouter } from "./routes/registerRouter";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(registerRouter);

export { app };

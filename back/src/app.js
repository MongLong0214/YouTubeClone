import express from "express";

import { registerRouter } from "./routes/registerRouter";
import { loginRouter } from "./routes/loginRouter";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(registerRouter);
app.use(loginRouter);

export { app };

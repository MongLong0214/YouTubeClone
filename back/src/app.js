import express from "express";

import { registerRouter } from "./routes/registerRouter";
import { loginRouter } from "./routes/loginRouter";
import { commentRouter } from "./routes/commentRouter";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(registerRouter);
app.use(loginRouter);
app.use(commentRouter);

export { app };

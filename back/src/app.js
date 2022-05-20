import express from "express";
import cors from "cors";
import { registerRouter } from "./routes/registerRouter";
import { loginRouter } from "./routes/loginRouter";
import { commentRouter } from "./routes/commentRouter";
import { videoRouter } from "./routes/videoRouter";

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(registerRouter);
app.use(loginRouter);

app.use(commentRouter);
app.use(videoRouter);
export { app };

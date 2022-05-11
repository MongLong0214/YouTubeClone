import { Router } from "express";
import { RegisterService } from "../service/registerService";

const registerRouter = Router();

registerRouter.post("/register", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await RegisterService.create({ name, email, password });
    res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
});

export { registerRouter };

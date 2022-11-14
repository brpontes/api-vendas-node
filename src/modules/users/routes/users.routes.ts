import { Router } from "express";
import { Joi, Segments, celebrate } from "celebrate";
import UsersController from "../controllers/UsersController";
import isAuthenticated from "../middlewares/isAutheticated";

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.get("/", isAuthenticated, usersController.index);

usersRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  usersController.create,
);

export default usersRouter;

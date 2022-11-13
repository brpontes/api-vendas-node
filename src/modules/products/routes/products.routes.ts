import { Router } from "express";
import ProductsController from "../controllers/ProductsController";
import { Joi, Segments, celebrate } from "celebrate";

const productsRouter = Router();
const productsCotroller = new ProductsController();

productsRouter.get("/", productsCotroller.index);

productsRouter.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  productsCotroller.show,
);

productsRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      price: Joi.number().precision(2).required(),
      quantity: Joi.number().required(),
    },
  }),
  productsCotroller.create,
);

productsRouter.put(
  "/:id",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      price: Joi.number().precision(2).required(),
      quantity: Joi.number().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  productsCotroller.update,
);

productsRouter.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  productsCotroller.delete,
);

export default productsRouter;

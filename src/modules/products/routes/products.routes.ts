import { Router } from "express";
import ProductsController from "../controllers/ProductsController";

const productsRouter = Router();
const productsCotroller = new ProductsController();

productsRouter.get("/", productsCotroller.index);
productsRouter.get("/:id", productsCotroller.show);
productsRouter.post("/", productsCotroller.create);
productsRouter.put("/:id", productsCotroller.update);
productsRouter.delete("/:id", productsCotroller.delete);

export default productsRouter;

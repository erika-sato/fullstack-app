// ROTAS DE PRODUTO

import { Router } from "express";
import { listProductsController } from "../../../../modules/product/useCases/listProducts";

const productsRoutes = Router();

productsRoutes.get("/", async (request, response) => {
  return listProductsController.handle(request, response);
});

export { productsRoutes };

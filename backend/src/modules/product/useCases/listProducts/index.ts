// INSTANCIAMENTO DO REPOSITÓRIO DE PRODUTOS PARA UTILIZAÇÃO NO USECASE

import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";
import { ListProductsController } from "./ListProductsController";
import { ListProductsUseCase } from "./ListProductsUseCase";

const productsRepository = new ProductsRepository();

const listProductsUseCase = new ListProductsUseCase(productsRepository);

const listProductsController = new ListProductsController(listProductsUseCase);

export { listProductsController };

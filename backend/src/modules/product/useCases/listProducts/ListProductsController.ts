// CONTROLLER PARA LIDAR COM AS REQUISIÇÕES E RESPOSTAS DO USECASE DE LISTAGEM DE PRODUTOS
import { Request, Response } from "express";
import { ListProductsUseCase } from "./ListProductsUseCase";

class ListProductsController {
  constructor(private listProductsUseCase: ListProductsUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { page, search } = request.query;

    const products = await this.listProductsUseCase.execute({
      page: Number.isNaN(Number(page)) ? undefined : Number(page),
      // @ts-ignore
      search,
    });

    response.set({ "x-total-count": String(products.totalItems) });
    return response.status(200).json(products);
  }
}

export { ListProductsController };

// CASO DE USO PARA LISTAGEM DOS PRODUTOS UTILIZANDO O REPOSITÓRIO DE PRODUTOS
import { IPaginationResponseDTO } from "../../../../shared/dtos/IPaginationResponseDTO";
import { AppError } from "../../../../shared/errors/AppError";
import { Product } from "../../model/Product";
import { IProductsRepository } from "../../repositories/IProductsRespository";

interface IRequest {
  page?: number;
  search?: string;
}
class ListProductsUseCase {
  constructor(private productsRepository: IProductsRepository) {}

  async execute({
    page = 1,
    search = undefined,
  }: IRequest): Promise<IPaginationResponseDTO<Product[]>> {
    const productResponse = await this.productsRepository.list({
      page,
      search,
    });

    if (!productResponse.data) {
      throw new AppError({
        message: "Product do not exists!",
        code: "not.found",
      });
    }

    return productResponse;
  }
}

export { ListProductsUseCase };

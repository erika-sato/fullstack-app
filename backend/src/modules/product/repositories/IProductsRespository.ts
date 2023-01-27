// INTERFACE DO REPOSITÓRIO DE PRODUTOS
// UTILIZANDO O PRINCÍPIO DE COMUNICAÇÃO COM BASE EM CONTRATOS
import { IPaginationDTO } from "../../../shared/dtos/IPaginationDTO";
import { IPaginationResponseDTO } from "../../../shared/dtos/IPaginationResponseDTO";
import { Product } from "../model/Product";

export interface IProductsRepository {
  list({
    page,
    search,
  }: IPaginationDTO): Promise<IPaginationResponseDTO<Product[]>>;
}

// IMPLEMENTAÇÃO DO REPOSITÓRIO DE PRODUTOS 
import axios from "axios";
import { IPaginationDTO } from "../../../../shared/dtos/IPaginationDTO";
import { IPaginationResponseDTO } from "../../../../shared/dtos/IPaginationResponseDTO";
import {
  mapProduct,
  OriginalProductsProps,
} from "../../../../utils/mapProducts";
import { Product } from "../../model/Product";
import { IProductsRepository } from "../IProductsRespository";

class ProductsRepository implements IProductsRepository {

  // MÉTODO LIST PARA PEGAR OS PRODUTOS DO BACKEND DA BEUNI
  async list({
    page = 1,
    itemsPerPage = 50,
    search = "",
  }: IPaginationDTO): Promise<IPaginationResponseDTO<Product[]>> {

    const { data } = await axios.get(
      `https://api.beuni.com.br/atlas/brands/v2/products?q=${search}&category=&min=0&max=99999&sortBy=featured&page=${page}&perPage=${itemsPerPage}`
    );
    
    // TRATAMENTO DOS DADOS
    const products = data.products.map((product: OriginalProductsProps) =>
      mapProduct(product)
    );

    return {
      totalItems: data.total,
      data: products,
    };
  }
}

export { ProductsRepository };

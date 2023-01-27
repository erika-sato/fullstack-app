// ENTIDADE DO OBJETO DE PRODUTO
import { uuid } from "uuidv4";
import { ImageObj } from "../../../utils/mapProducts";

export class Product {
  public readonly id: string;

  public name: string;
  public description: string;
  public imageUrl: ImageObj[];
  public hasFreeShipping: boolean;
  public rating: number;
  public minimumQuantity: number;
  public totalStock: number;
  public price: number;

  constructor(props: Omit<Product, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}

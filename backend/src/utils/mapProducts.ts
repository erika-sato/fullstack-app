// ARQUIVO DE UTILIDADE PARA O TRATAMENTO DOS DADOS DE PRODUTO

import { Product } from "../modules/product/model/Product";

export type ProductResponseDTO = {
  products: OriginalProductsProps[];
  total: number;
  userWishlist: any;
  userCart: any;
};

export type ImageObj = {
  id: string;
  width: number;
  height: number;
  url: string;
  filename: string;
  size: number;
  type: string;
  thumbnails: {
    small: {
      url: string;
      width: number;
      height: number;
    };
    large: {
      url: string;
      width: number;
      height: number;
    };
    full: {
      url: string;
      width: number;
      height: number;
    };
  };
};

export interface OriginalProductsProps {
  id: number;
  name: string;
  categories: string[];
  slug: number;
  description: string;
  brand: string;
  image: ImageObj[];
  hasFreeShipping: boolean;
  rating: number;
  recordId: string;
  minimumQuantity: number;
  total_stock: number;
  kitManagerVariations: string;
  price: number;
}

export function mapProduct(product: OriginalProductsProps): Product {
  const productMapped = {
    id: String(product.id),
    name: product.name,
    description: product.description,
    hasFreeShipping: product.hasFreeShipping,
    imageUrl: [...product.image],
    minimumQuantity: product.minimumQuantity,
    totalStock: product.total_stock,
    price: product.price,
    rating: product.rating,
  };

  return productMapped;
}

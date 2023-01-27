// FUNÇÃO PARA MAPEAR E TRATAR DADOS DE PRODUTOS
import { ProductProps } from './../hooks/useProducts';
import { formatStringOrNumberToBRL } from './formatStringOrNumberToBRL';

export function mapProduct(product: ProductProps) {
    const productMapped = {
        ...product,
        priceMapped: formatStringOrNumberToBRL(product.price)
    }

    return productMapped;
}
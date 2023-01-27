// CONTEXT API PARA GERENCIAR O ESTADO GLOBAL DOS PRODUTOS
// UTILIZADO PARA APRESENTAR O DETALHAMENTO DO PRODUTO, DE FORMA SIMPLES E SEM NOVAS REQUISIÇÕES.

import { ProductProps } from '../hooks/useProducts';
import {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
} from 'react';


type ProductContextData = {
    product: ProductProps | null;
    setProduct: Dispatch<SetStateAction<ProductProps | null>>;
};

const ProductContext = createContext<ProductContextData>(
    {} as ProductContextData
);

const useProduct = () => useContext(ProductContext);

export { ProductContext, useProduct };
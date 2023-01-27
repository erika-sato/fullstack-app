// IMPLEMENTAÇÃO DO HOOK DE PRODUTOS FEITO COM REACT QUERY
// COM O OBJETIVO DE DEIXAR A APLICAÇÃO MAIS EFICIENTE ATRAVÉS DA UTILIZAÇÃO DE CACHE NAS REQUISIÇÕES

import { api } from './../services/api';
import { useQuery, UseQueryResult } from 'react-query';
import { mapProduct } from '../utils/mapProducts';

type ImageObj = {
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

export interface ProductProps {
    id: string;
    name: string;
    description: string;
    imageUrl: ImageObj[];
    hasFreeShipping: boolean;
    rating: number;
    minimumQuantity: number;
    totalStock: number;
    price: number;
    priceMapped?: string;
}

export interface ProductsResponse {
    totalItems: number;
    data: ProductProps[];
}

interface UseProductsProps {
    page?: number;
    filters?: {
        search?: string;
    };
}

//Função para buscar produtos no back-end, utilizando Axios para realizar as requisições
export async function getProducts({
    page = 1,
    filters
}: UseProductsProps): Promise<ProductsResponse> {
    try {
        const searchFilter = filters?.search ? `&search=${filters.search}` : '';
        const url = `/products/?page=${page}${searchFilter}`;
        const response = await api.get(url, {
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        });

        const data: ProductProps[] = response.data.data;
        const totalItems = Number(response.headers['x-total-count']);
        const products = data.map((product) => mapProduct(product));

        return {
            totalItems,
            data: products
        };
    } catch (error) {
        return {} as ProductsResponse;
    }
}

// Hook de Produto utilizando o useQuery do React Query. 
export function useProducts({
    page,
    filters
}: UseProductsProps): UseQueryResult<ProductsResponse> {
    return useQuery(
        ['products', page, filters],
        () => getProducts({ page, filters }),
    );
}
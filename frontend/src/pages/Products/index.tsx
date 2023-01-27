import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pagination } from "../../components/Pagination";
import { Rating } from "../../components/Rating";
import Skeleton from "../../components/Skeleton";
import { ProductContext } from "../../contexts/ProductContext";
import { ProductProps, ProductsResponse, useProducts } from "../../hooks/useProducts";
import { 
    Container, 
    Search, 
    ProductsArea, 
    ProductCard, 
    SearchContainer,
} 
from "./styles";

export function Products() {
    const [search, setSearch] = useState<string | undefined>();
    const [sortBy, setSortBy] = useState<string>('');
    const [freeShipping, setFreeShipping] = useState<boolean>(false);
    const [page, setPage] = useState(1);

    const { setProduct } = useContext(ProductContext);

    const navigate = useNavigate();

    // UTILIZAÇÃO DO HOOK DE PRODUTOS PARA TRAZER OS DADOS DO BACK-END UTILIZANDO REACT QUERY
    const { data, isLoading } = useProducts({
        page,
        filters: {
            search
        }
    });

    // Função que lida com os filtros de busca dos produtos (por relevância de avaliação, menor preço, maior preço ou envio gratuito).
    // Lembrando que esta funcionalidade é apenas uma simulação do que poderia ser implementado, pois a mesma só filtra os 50 itens que já estão em tela e não todos os dados do backend da Beuni, 
    const handleData = ({ data }: ProductsResponse) => {
        if (sortBy || freeShipping) {
            let products: ProductProps[] = [];
            if (sortBy !== '') {
                if (sortBy === 'relevance') {
                    products = data.sort((a, b) => b.rating - a.rating);
                }
                if (sortBy === 'lowestPrice') {
                    products = data.sort((a, b) => a.price - b.price);
                }
                if (sortBy === 'highestPrice') {
                    products = data.sort((a, b) => b.price - a.price);
                }
            }
            if (freeShipping === true) {
                products = data.filter((product) => product.hasFreeShipping === true);
            }
            return products;
        }
        return data;
    }

    //Função de busca de produtos por palavra-chave digitada.
    const handleSearch = (value: string) => {
        if (value.length > 3) {
            setSearch(value);
            return;
        }
        setSearch(undefined);
    }

    return (
        <Container>
            <SearchContainer>
                <Search>
                    <input placeholder="O que você procura?"
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                    <button>
                        🔍
                    </button>
                </Search>
                <Search>
                    <select id='area' onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
                        <option value="">Ordenar por</option>
                        <option value="relevance">Maior relevância</option>
                        <option value="lowestPrice">Menor preço</option>
                        <option value="highestPrice">Maior preço</option>
                    </select>
                </Search>
                <Search  style={{ cursor: "pointer" }}>
                    <fieldset>
                        <input type="checkbox" id="shipping" defaultChecked={freeShipping} onChange={() => setFreeShipping(prev => !prev)}/>
                        <label htmlFor="shipping">Frete grátis</label>
                    </fieldset>
                </Search>
            </SearchContainer>
            {
                isLoading ? (
                    <ProductsArea>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    </ProductsArea>
                ) : (
                    <>
                        <ProductsArea>
                            {
                                data ? handleData(data)?.map((product) => (
                                    <ProductCard
                                    key={product.id}
                                        onClick={() => {
                                            setProduct(product)
                                            navigate(`/products/${product.id}`)
                                        }}
                                    >
                                        <img src={product.imageUrl[0].url} alt={product.name} loading="lazy"/>
                                        <div>
                                            <p>{product.name}</p>
                                            <Rating rating={product.rating} aria-label="Rating of this product is 2.3 out of 5."></Rating>
                                            <span>{product.priceMapped}</span>
                                            
                                            {
                                                product.totalStock === 0 && (
                                                    <h6>Sem estoque</h6>
                                                )
                                            }
                                        </div>
                                    </ProductCard>
                                )) : (
                                    <h1>Não há produtos ainda</h1>
                                )
                            }
                        </ProductsArea>
                        {
                            data && (
                                <Pagination
                                    onPageChange={setPage}
                                    totalCountOfRegisters={data.totalItems}
                                    currentPage={page}
                                    registersPerPage={50}
                                />
                            )
                        }
                    </>
                )
            }
        </Container>
    );
};
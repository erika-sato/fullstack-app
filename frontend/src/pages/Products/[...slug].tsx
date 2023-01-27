import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { useNavigate } from "react-router-dom";
import ToastComponent from "../../components/Toast";
import { formatStringOrNumberToBRL } from "../../utils/formatStringOrNumberToBRL";
import {BiArrowBack } from 'react-icons/bi';
import { Rating } from "../../components/Rating";
import { 
    ImageContainer, 
    ProductContainer, 
    ProductDetails, 
    QuantityWrapper, 
    DisabledWrapper, 
    BuyWrapper, 
    GoBackWrapper, 
    Slider,
} 
from "./styles";

export function ProductsDetail() {
    const [quantity, setQuantity] = useState<number>();
    const [isDisable, setIsDisable] = useState<boolean>(false);
    const [toast, setToast] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [currentImage, setCurrentImage] = useState<number>(0);
    const [arrowLeftDisabled, setArrowLeftDisabled] = useState<boolean>(true);
    const [arrowRightDisabled, setArrowRightDisabled] = useState<boolean>(false);

    const navigate = useNavigate();

    // UTILIZAÇÃO DO CONTEXTO PARA TRAZER AS INFORMAÇÕES DO PRODUTO SELECIONADO PELO CLIENTE NA PÁGINA DE PRODUTOS
    const { product } = useContext(ProductContext);

    useEffect(() => {
        // Como o dado do produto a ser visualizado está sendo passado por contexto, 
        // vamos redirecionar para tela de produtos quando não houver esta informação
        if (!product) {
            return navigate(`/products`);
        }
        setQuantity(product.minimumQuantity);
        //Se o total de itens disponíveis em estoque for menor que a quantidade mínima de compra estipulada, o produto aparecerá como indisponível.
        if (product.totalStock < product.minimumQuantity) {
            setIsDisable(true);
        }
        //Se o produto não tiver mais que uma foto, a seta para direita do slider é desabilitada.
        if(product.imageUrl.length < 2) {
            setArrowRightDisabled(true)
        }
    }, [])

    //Função para adicionar ou remover um item de determinado produto, no momento da compra.
    const handleQuantity = (minimumQuantity: number, operation: string) => {
        if (operation === 'sum') {
            setQuantity(prev => Number(prev) + 1);
            return;
        }
        if (operation === 'sub') {
            if (Number(quantity) > minimumQuantity) {
                setQuantity(prev => Number(prev) - 1);
                return;
            } else {
                setQuantity(minimumQuantity);
            }
        }
        return;
    }

    //Função para ativar mensagem de notificação ao usuário, e também limpar o input "e-mail" após o submit.
    const handleNotify = (e: any) => {
        e.preventDefault();
        setEmail("")
        setToast(true)
    }

    //Função que calcula o total em reais da compra de um produto (número de itens multiplicado pelo preço).
    const handleTotalValue = (unitValue: number) => {
        const totalValue = Number(quantity) * unitValue;
        return formatStringOrNumberToBRL(totalValue);
    }

    //Slider de fotos dos produtos.
    const handleImages = (imagesQuantity: number, operation: string) => {
        if (operation === 'next') {
            if(currentImage === 0) {
                setArrowLeftDisabled(false);
            }
            if((currentImage + 1) === (imagesQuantity - 1)) {
                setArrowRightDisabled(true);
            }
            if(currentImage < (imagesQuantity - 1)) {
                setCurrentImage(prev => prev + 1 )
            } else {
                setArrowRightDisabled(true)
            }

        }

        if (operation === 'prev') {
            if(currentImage === (imagesQuantity - 1)) {
                setArrowRightDisabled(false);
            }
            if((currentImage - 1) === 0) {
                setArrowLeftDisabled(true);
            }
            if(currentImage > 0) {
                setCurrentImage(prev => prev - 1 )
            } else {
                setArrowLeftDisabled(true)
            }
        }
    }

    return (
        <>
        <GoBackWrapper>
        <BiArrowBack size={25} onClick={() => navigate('/products')}/>
        <p onClick={() => navigate('/products')}>Voltar</p>
        </GoBackWrapper>
        <ProductContainer>
            {
                product && (
                    <>
                        <ImageContainer>
                           <img 
                           src={product.imageUrl[currentImage].url} 
                           alt="" width={"100%"} height={"100%"} 
                           />
                           <Slider 
                           leftDisabled={arrowLeftDisabled} 
                           rightDisabled={arrowRightDisabled}
                           >
                            <BiArrowBack 
                            size={25} 
                            className="left-arrow" 
                            onClick={() => handleImages(product.imageUrl.length, "prev")}
                            />
                            <BiArrowBack 
                            size={25} 
                            className="right-arrow" 
                            onClick={() => handleImages(product.imageUrl.length, "next")}
                            />
                           </Slider>
                        </ImageContainer>

                        <ProductDetails>
                            <h1>{product.name}</h1>
                            <p>{product.description}</p>
                            <Rating rating={product.rating}/>
                            <span>{product.priceMapped}</span>
                            <h2>Quantidade</h2>

                            <QuantityWrapper>
                                <span>{quantity}</span>
                                <button
                                    style={{ borderTopRightRadius: "0", borderEndEndRadius: "0" }}
                                    onClick={() => handleQuantity(product.minimumQuantity, 'sub')}
                                    disabled={isDisable}
                                >–</button>
                                <button 
                                style={{ borderTopLeftRadius: "0", borderEndStartRadius: "0" }} 
                                onClick={() => handleQuantity(product.minimumQuantity, 'sum')} 
                                disabled={isDisable} >+</button>
                            </QuantityWrapper>

                            <h4>Disponibilidade: {product.totalStock} unid.</h4>

                            {
                                isDisable ? (
                                    <DisabledWrapper>
                                    <h4>Não temos este produto disponível no momento. </h4>
                                    <form onSubmit={handleNotify}>
                                        <input 
                                        placeholder="Coloque seu melhor e-mail"  
                                        type="email" 
                                        required 
                                        id="input-email" 
                                        onChange={(e) => setEmail(e.target.value)} 
                                        value={email}
                                        />
                                    <button type="submit">Me avise!</button>
                                    </form>
                                    </DisabledWrapper>
                                ) : (
                                    <BuyWrapper>
                                        <div>
                                            <span>Total</span>
                                            <h2>{handleTotalValue(product.price)}</h2>
                                        </div>
                                    <a 
                                    href={`https://api.whatsapp.com/send?phone=5511930390062&text=Olá.%20Preciso%20de%20${quantity}%20unidades%20de%20${product.name}.%20Valor%20total%20${handleTotalValue(product.price)}`} 
                                    target="_blank">Comprar agora
                                    </a>
                                    </BuyWrapper>
                                )
                            }
                        </ProductDetails>
                    </>

                )
            }
            {
                toast && (
                    <ToastComponent variant="success" message="Lembrete ativado com sucesso! 😊" close={() => setToast(false)}/>
                )
            }
        </ProductContainer >

        </>
    );
};


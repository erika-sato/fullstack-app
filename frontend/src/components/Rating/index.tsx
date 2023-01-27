// COMPONENTE PARA EXIBIÇÃO A AVALIAÇÃO DO PRODUTO EM FORMA DE ESTRELAS
import { Container } from "./styles";

type RatingProps = {
    rating: number;
}

export function Rating({ rating }: RatingProps) {
    return (
        <Container rating={rating}/>
    )
}
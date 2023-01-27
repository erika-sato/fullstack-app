import styled from "styled-components";

type RatingProps = {
    rating: number;
}

export const Container = styled.div<RatingProps>`
--star-size: 1.2rem;
    --star-background: #fc0;
    --rating: ${props => props.rating} ;
    --percent: calc(var(--rating) / 5 * 100%);
  
  display: inline-block;
  font-size: var(--star-size);
  line-height: 1;
  
  :before {
    content: '★★★★★';
    letter-spacing: 3px;
    background: linear-gradient(90deg, var(--star-background) var(--percent), var(--gray-300) var(--percent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
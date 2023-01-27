import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 960px;
    margin: 2rem auto;
`;

export const SearchContainer = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    gap: 1rem;
    width: 100%;
    max-width: 960px;
    @media (max-width: 500px) {
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-columns: 1fr;
        width: 90%;
    }
`;

export const Search = styled.div`
    margin-bottom: 3rem;
    padding: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 3rem;
    background-color: #F8F9FA;
    box-shadow: 2px 2px 5px #babecc, -1px -1px 2px #fff;

    > input {
        flex: 1;
        height: 100%;
        padding: 1rem;
        border: 0;
        outline: 0;
        font-size: 1.1rem;
        border-radius: 10px;
        background-color: #F8F9FA;
        text-shadow: 1px 1px 0 #fff;
    }

    > select {
        flex: 1;
        height: 100%;
        padding: 1rem;
        border: 0;
        outline: 0;
        font-size: 1.1rem;
        border-radius: 10px;
        background-color: #F8F9FA;
        text-shadow: 1px 1px 0 #fff;
        font-weight: bold;
    }

    > fieldset {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        border: 0;
        outline: 0;
        padding: 0 1rem;
        cursor: pointer;

        > label {
        font-size: 1.1rem;
        font-weight: bold;
        margin-left: 1rem;
        }

        > input {
            flex: 0.4;
            height: 100%;
        }
    }

    > button {
        background-color: var(--orange-500);
        width: 3rem;
        height: 3rem;
        border-radius: 100%;
        transition: 0.3s;
        filter: brightness(1.4);

        :hover {
            filter: brightness(1)
        }
    }

    @media (max-width: 500px) {
        margin-bottom: 1rem;
        > fieldset {
            > input {
                flex: 0.08;
            }
        }
    }
`;

export const ProductsArea = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 3rem;
    width: 100%;
    margin-bottom: 3rem;
    @media (max-width: 1024px) {
            grid-template-columns: 1fr 1fr 1fr;
            padding: 0 3rem;
    }
    @media (max-width: 725px) {
            grid-template-columns: 1fr 1fr;
            padding: 0 1rem;
            gap: 1rem;
            margin-top: 1rem;
    }
`;

export const ProductCard = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--white);
    border-radius: 2rem;
    padding: 1rem;
    box-shadow: 1px 1px 3px #babecc, -1px -1px 2px #fff;
    transition: 0.5s;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > img {
        width: 100%;
        border-radius: 2rem;
        max-height: 200px;
        min-height: 200px;
    }

    > div {
        display: flex;
        flex-direction: column;
        gap: 0.1rem;
        > p {
        font-size: 1rem;
        font-weight: bold;
        padding-top: 0.5rem;
    }

    > span {
        font-size: 1.2rem;
        color: var(--orange-500);
        font-weight: bold;
    }

    }

    :hover {
        transform: translateY(-1rem);
        transition: 0.5s;
        background: rgb(255,255,255);
        background: -moz-linear-gradient(0deg, rgba(255,255,255,1) 6%, rgba(255,133,76,1) 76%);
        background: -webkit-linear-gradient(0deg, rgba(255,255,255,1) 6%, rgba(255,133,76,1) 76%);
        background: linear-gradient(0deg, rgba(255,255,255,1) 6%, rgba(255,133,76,1) 76%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#ff854c",GradientType=1);
    }

    @media (max-width: 725px) {
        width: 80%;
        margin: 0 auto;
    }

    @media (max-width: 500px) {
        width: 100%;
        :hover {
             transform: translateY(-0.5rem);
        }

        > img {
            max-height: 150px;
            min-height: 150px;
         }
    }

`;

export const ProductContainer = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: stretch;
    gap: 4rem;
    max-width: 960px;
    margin: 3rem auto;
    @media (max-width: 500px) {
        grid-template-columns: 1fr;
        max-width: 90%;
    }
`;

export const ImageContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 12px;
    padding: 0.4rem;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 1px 3px 3px #babecc, -1px -1px 2px #fff;
    height: fit-content;
    
    > img {
        object-fit: cover;
    }
`;

export const ProductDetails = styled.div`
    display: flex;
    max-width: 90%;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    gap: 1rem;
    color: var(--blue-700);
    > h1 {
        font-size: 1.5rem;
    };
    > h2 {
        font-size: 1.3rem;
        margin-top: 3rem;
    }
    > span{
        margin-top: 1rem;
        display: block;
        font-size: 1.5rem;
        color: var(--green-500);
    };
    > p {
        margin-top: 1rem;
        font-size: 1rem;
        line-height: 1.6;
        color: var(--blue-700);
        text-align: justify;
    };
    @media (max-width: 500px) {
        max-width: 100%;
    }
`;

export const QuantityWrapper = styled.div`
        background-color: var(--white);
        width: 60%;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 0.3rem;
        border-radius: 1rem;
        > button {
            width: 100%;
            height: 100%;
            border-radius: 1rem;
            background-color: #9ED5C5;
            color: var(--green-500);
            font-size: 1.5rem;
            font-weight: bold;
            border: 1px solid  var(--green-500);
            cursor: pointer;
            transition: 0.5s;
            :hover {
                filter: brightness(1.1)
            }
            :disabled {
                filter: brightness(0.7);
                cursor: not-allowed;
                color: var(--white);
            }
        }

        > span {
            width: 100%;
            text-align: center;
            font-weight: bold;
        }
`;

export const DisabledWrapper = styled.div`
        > h4 {
            font-size: 0.8rem;
            color: var(--red-500);
            margin-bottom: 1rem;
        }

        > form {
            margin-top: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;

        > button {
        margin-top: auto;
        background-color: var(--green-500);
        border: 0;
        color: var(--white);
        border-radius: 8;
        padding: 1rem;
        cursor: pointer;
        font-weight: bold;
        font-size: 1rem;
        width: 100%;
        border-radius:10px;
        white-space: nowrap;

        :hover {
            filter: brightness(1.4);
        }
        }

        > input {
        flex: 1;
        height: 100%;
        padding: 1rem;
        border: 0;
        outline: 0;
        font-size: 1rem;
        border-radius: 10px;
        background-color: var(--white);
        text-shadow: 1px 1px 0 #fff;
    }


        }
    @media (max-width: 500px) {
    width: 100%;
    }
`;

export const BuyWrapper = styled.div`
    display: flex;
    width: 90%;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    color: var(--blue-700);
    margin-top: 2rem;
    background-color: var(--white);
    border-radius: 1rem;
    padding: 1rem 2rem;
    > a {
        margin-top: auto;
        margin-left: auto;
        background-color: var(--green-500);
        border: 0;
        color: var(--white);
        border-radius: 8;
        padding: 1rem;
        cursor: pointer;
        font-size: 1rem;
        width: 50%;
        border-radius:10px;
        text-decoration: none;
        text-align: center;
        font-weight: bold;
        :hover {
            filter: brightness(1.4);
        }
    }
    > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.3rem;
        > span {
            font-size: 0.8rem;
            font-weight: bold;
        }
        > h2 {
            font-size: 1.4rem;
            color: var(--orange-500);
            font-weight: bold;
        }
    }
    @media (max-width: 500px) {
        align-items: center;
        width: 100%;
    }
`;

export const GoBackWrapper = styled.div`
    width: 100%;
    max-width: 960px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 1rem auto;
    font-size: 1.2rem;
    gap: 0.3rem;
    > p {
        cursor: pointer;
        font-weight: bold;
    }
    > svg {
        cursor: pointer;
    }
    @media (max-width: 500px) {
        width: 95%;
    }
    `;

type SliderProps = {
    leftDisabled: boolean;
    rightDisabled: boolean;
}

export const Slider = styled.div<SliderProps>`
        position: absolute;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0 1rem;

        .left-arrow {
            color: ${props => props.leftDisabled ? "var(--gray-400)" : "var(--orange-500)"};
            cursor: ${props => props.leftDisabled ? "not-allowed" : "pointer"};
        }

        .right-arrow {
            color: ${props => props.rightDisabled ? "var(--gray-400)" : "var(--orange-500)"};
            cursor: ${props => props.rightDisabled ? "not-allowed" : "pointer"};
            transform: rotate(180deg);
        }
`;
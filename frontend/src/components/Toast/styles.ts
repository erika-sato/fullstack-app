import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  justify-content: center;
  align-items: center;
  z-index: 99999999;
  -webkit-animation: fadein 1.5s, fadeout 2s 1.5s forwards;
  animation: fadein 1.5s, fadeout 2s 1.5s forwards;

@-webkit-keyframes fadein {
  from {top: 0; opacity: 0;}
  to {top: 30px; opacity: 1;}
}

@keyframes fadein {
  from {top: 0; opacity: 0;}
  to {top: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {top: 30px; opacity: 1;}
  to {top: 0; opacity: 0;}
}

@keyframes fadeout {
  from {top: 30px; opacity: 1;}
  to {top: 0; opacity: 0;}
}
`;

export const Body = styled.div`
  width: 350px;


  .error {
    background-color: var(--red-500);
  }

  .success {
    background-color: var(--green-500);
    filter: brightness(1.3)
  }

  > div {
    padding: 1rem;
    border-radius: 0.7rem;
    color: var(--white);
    text-align: center;
  }
`;

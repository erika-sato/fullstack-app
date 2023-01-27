import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  & > div:last-child {
    margin-left: 8px;
    margin-top: 8px;
  }
  @media (max-width: 500px) {
    width: 80%;
  }
`;

export const PagesWrapper = styled.div`
  display: flex;
  span {
    width: 35px;
    height: 35px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
  }
  & > {
    margin: 0 8px;
  }
`;

import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: relative;
  width: 100%;
  max-width: 1280px;
  height: 80vh;
  margin: 0 auto;
  font-size: 3rem;
  text-align: center;

  @media (max-width: 725px) {
    width: 100%;
    flex-direction: column;

    > img {
      width: 60% !important;
      margin-top: 3rem;
    }
  }

  .hero-image {
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 40vh;
  }

  .hero-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    max-width: 500px;
    gap: 1rem;
    > h3 {
      font-size: 1.2rem;
      font-weight: 500;
      letter-spacing: 4px;
      text-transform: uppercase;
      color: var(--blue-700);
      opacity: 0.9;
      > span {
        font-size: 2rem;
      }
      @media (max-width: 725px) {
        font-size: 1.1rem;
      }
    }

    > h1 {
      text-align: center;
      font-size: 3rem;
      letter-spacing: 0.2rem;
      font-weight: 900;
      text-transform: uppercase;
      color: #1f1f25;

      @media (max-width: 725px) {
        font-size: 2rem;
      }
    }

    > span {
      letter-spacing: 0.2rem;
      margin: 0.5rem 0rem;
      font-weight: 800;
      text-transform: inherit;
      text-transform: uppercase;
      color: #1f1f25;
      font-size: 1.4rem;
      line-height: 1rem;
      opacity: 0.9;
      @media (max-width: 725px) {
        font-size: 1.1rem;
      }
    }

    > h2 {
      font-size: 2rem;
      letter-spacing: 0.2rem;
      font-weight: 800;
      text-transform: inherit;
      text-transform: uppercase;
      color: var(--orange-500);
      @media (max-width: 725px) {
        font-size: 1.5rem;
      }
    }
  }

  .Example-btn1 {
    background-color: #081f2d;
    border-radius: 29px;
    border: 1px solid #081f2d;
    color: white;
    font-size: 15px;
    padding: 10px 45px;
    cursor: pointer;
    transition: 0.3s;
  }

  .Example-btn1:hover {
    background-color: white;
    color: #081f2d;
    border-color: #081f2d;
    transition: 0.3s;
  }

`;

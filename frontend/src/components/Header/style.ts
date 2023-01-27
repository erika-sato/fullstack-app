import styled from 'styled-components';

export const Container = styled.nav`
  position: relative;
  height: fit-content;
  max-height: 6rem;
  width: 100%;
  background-color: transparent;
  padding: 1rem 0;

  > div {
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > h1 {
    color: var(--white)
  }
  
  .brand-name {
  text-decoration: none;
  color: black;
  font-size: 1.3rem;
  margin-left: 1rem;
}

.navigation-menu {
  margin-left: auto;
}

.navigation-menu ul {
  display: flex;
  padding: 0;
  background-color: var(--offwhite-300);
}

.navigation-menu li {
  list-style-type: none;
  margin: 0 1rem;
}

.navigation-menu li a {
  text-decoration: none;
  display: block;
  width: 100%;
  font-weight: bold;
  font-size: 1.3rem;
  color: var(--orange-500);
  transition: 0.3s;
  display: block;
  position: relative;
  padding: 0.2em 0;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  &.active {
      color: var(--blue-800);
      border-bottom: 2px solid var(--blue-800);
    }
    @media (max-width: 500px) {
      border-top: 0;
      border-bottom: 2px solid transparent ;
      &.active {
      border-bottom: 2px solid transparent;
    }
    }
}

.navigation-menu li a:hover {
  filter: brightness(1.5);
  color: var(--gray-600);
  border-bottom: 2px solid var(--blue-800);
  @media (max-width: 500px) {
    color: var(--blue-800);
    border-bottom: 2px solid transparent;
  }
}

.hamburger {
  border: 0;
  height: 40px;
  width: 40px;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: var(--orange-500);
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translateY(-50%);
  display: none;

  > h1 {
    color: var(--white);
  }
}

.hamburger:hover {
  filter: brightness(1.3);
}

@media (max-width: 550px) {
  .hamburger {
    display: block;
  }

  .navigation-menu ul {
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    height: calc(100vh - 60px);
    display: none;
    z-index: 5;
    transition: 0.4s;
  }

  .navigation-menu li {
    text-align: center;
    margin: 0;
    width: 100%;
  }

  .navigation-menu li a {
    color: black;
    width: 100%;
    padding: 1.5rem 0;
  }

  .navigation-menu li:hover {
    background-color: var(--orange-500);
    filter: brightness(1.3);
    color: var(--white);
  }

  .navigation-menu.expanded ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

  }
}

.Example-btn1 {
  display: none;
}

.Example-btn1.expanded {
    background-color: var(--blue-800);
    border-radius: 29px;
    border: 1px solid var(--blue-800);
    color: white;
    font-size: 15px;
    padding: 10px 45px;
    cursor: pointer;
    transition: 0.3s;
    display: flex;

    @media (min-width: 550px) {
      display: none;
    }
  }

  .Example-btn1:hover {
    background-color: white;
    color: var(--blue-800);
    border-color: var(--blue-800);
    transition: 0.3s;
  }
  }
`;
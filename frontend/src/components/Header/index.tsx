import { Container } from './style';
import { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import LogoImage from "../../assets/logo.png";

export function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <Container>
      <div>
        <Link to="/" className="brand-name">
          <img
            src={LogoImage}
            alt="Logo BeUni"
          />
        </Link>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {
            !isNavExpanded ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="white"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 
                  2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 
                  1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 
                  011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <h1>X</h1>
            )
          }
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <NavLink onClick={() => setIsNavExpanded(!isNavExpanded)} to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink onClick={() => setIsNavExpanded(!isNavExpanded)}  to="/products">PRODUTOS</NavLink>
            </li>
            <Link 
            to="/products"
            onClick={() => setIsNavExpanded(!isNavExpanded)} 
            className={
            isNavExpanded ? "Example-btn1 expanded" : "Example-btn1"
          }>
              MONTE SEU KIT
            </Link>
          </ul>
        </div>
      </div>
    </Container>
  );
}




import { Container } from './style';
import HeroImage from '../../assets/hero.svg';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <Container>
        <img
          src={HeroImage}
          alt="Pessoas fazendo compras na internet"
          style={{
            width: '50%'
          }}
        />
      <div className="hero-text">
        <h3>
          <span>👋</span>Olá, Somos uma
        </h3>
        <h1>Plataforma Digital</h1>
        <span>especializada em:</span>
        <h2>Kits Personalizados</h2>
        <h3>
          Compre, armazene e envie brindes.
        </h3>
        <Link to="/products" className="Example-btn1">
          MONTE SEU KIT
        </Link>
      </div>
    </Container>
  );
}

//Componente que gera skeleton screens para ilustrar o carregamento de conteúdos.

import { Container } from "./styles"

const Skeleton = () => (
  <Container>
      <div className="card">
    <div className="card-img skeleton">
    </div>
    <div className="card-body">
      <h2 className="card-title skeleton">
      </h2>
      <p className="card-intro skeleton">
      </p>
    </div>
  </div>
  </Container>
)

export default Skeleton
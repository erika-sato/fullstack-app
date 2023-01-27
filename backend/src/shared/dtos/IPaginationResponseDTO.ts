// TIPAGEM DA RESPOSTA DE ROTAS DE PAGINAÇÃO

export interface IPaginationResponseDTO<T> {
  totalItems: number;
  data: T;
}

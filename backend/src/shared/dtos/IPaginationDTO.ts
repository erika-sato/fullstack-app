// TIPAGEM PARA ROTAS COM PAGINAÇÃO

export interface IPaginationDTO {
  page?: number;
  itemsPerPage?: number;
  search?: string;
}

// COMPONENTE UTILIZADO NA PAGINAÇÃO PARA EXIBIÇÃO DOS NÚMEROS REFERENTES A CADA PÁGINA
import { Container } from './styles';

interface PaginationItemProps {
  number: number;
  onPageChange: (page: number) => void;
  isCurrent?: boolean;
}

export function PaginationItem({
  number,
  onPageChange,
  isCurrent = false
}: PaginationItemProps): JSX.Element {
  return (
    <Container isCurrent={isCurrent} onClick={() => onPageChange(number)}>
      {number}
    </Container>
  );
}

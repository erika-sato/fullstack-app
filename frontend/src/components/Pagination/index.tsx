// COMPONENTE DE PAGINAÇÃO
import { PaginationItem } from './PaginationItem';

import { Container, PagesWrapper } from './styles';

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter(page => page > 0);
}

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange
}: PaginationProps): JSX.Element {
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage);

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];
  return (
    <Container>
      <PagesWrapper>
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem number={1} onPageChange={onPageChange} />
            {currentPage > 2 + siblingsCount && <span>...</span>}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map(page => (
            <PaginationItem
              onPageChange={onPageChange}
              number={page}
              key={page}
            />
          ))}

        <PaginationItem
          onPageChange={onPageChange}
          number={currentPage}
          isCurrent
        />

        {nextPages.length > 0 &&
          nextPages.map(page => (
            <PaginationItem
              onPageChange={onPageChange}
              number={page}
              key={page}
            />
          ))}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && <span>...</span>}

            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
      </PagesWrapper>
      <div>
        <strong>{(currentPage - 1) * registersPerPage}</strong> -{' '}
        <strong>
          {lastPage === currentPage
            ? totalCountOfRegisters
            : currentPage * registersPerPage > totalCountOfRegisters
            ? totalCountOfRegisters
            : currentPage * registersPerPage}
        </strong>{' '}
        de <strong>{totalCountOfRegisters}</strong>
      </div>
    </Container>
  );
}

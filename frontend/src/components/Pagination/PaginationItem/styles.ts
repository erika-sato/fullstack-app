import styled, { css } from 'styled-components';

interface PaginationItemProps {
  isCurrent?: boolean;
}

export const Container = styled.button<PaginationItemProps>`
  padding: 8px 12px;

  border-radius: 7px;

  margin: 0 8px;

  cursor: pointer;

  ${props =>
    props.isCurrent
      ? css`
          background-color: var(--orange-500);
          color: #ffffff;
        `
      : css`
          background-color: #fff;
          color: var(--orange-500);

          border: 1px solid var(--orange-500);

          &:hover {
            background-color: var(--orange-500);
            color: #ffffff;
          }
        `}
`;

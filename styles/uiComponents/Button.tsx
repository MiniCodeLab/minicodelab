import styled from '@emotion/styled';

export const Button = styled.button`
  border: 3px solid var(--color-stroke);
  color: var(--color-stroke);
  background: var(--color-purple);
  font-weight: bold;
  font-size: var(--title-h2);
  padding: 10px;

  &:hover {
    background: var(--color-green);
  }
`;

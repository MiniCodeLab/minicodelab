import styled from '@emotion/styled';

export const Button = styled.button`
  background: var(--color-purple);
  border-radius: 10px;
  border: 3px solid var(--color-stroke);
  color: var(--color-stroke);
  font-size: var(--title-h2);
  font-weight: bold;
  padding: 10px;

  &:hover {
    background: var(--color-green);
  }
`;

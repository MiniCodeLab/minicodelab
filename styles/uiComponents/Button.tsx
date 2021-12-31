import styled from '@emotion/styled';

export const Button = styled.button`
  border-radius: 8px;
  border: 3px solid var(--color-stroke);
  margin: 10px 0px 0px 0px;
  color: var(--color-text);
  background: var(--color-purple);
  font-weight: bold;
  padding: 7px;

  &:hover {
    background: var(--color-green);
  }
`;

import styled from '@emotion/styled';

export const Tag = styled.button`
  background: ${(props) => props.color || 'inherit'};
  border: 3px solid var(--color-stroke);
  color: var(--color-stroke);
  font-size: var(--paragraph);
  font-weight: bold;
  padding: 7px;

  &:hover {
    cursor: pointer;
  }

  & p {
    color: var(--color-stroke);
  }
`;

import styled from '@emotion/styled';

export const Tag = styled.div`
  display: inline-block;
  border-radius: 3px;
  border: 3px solid var(--color-stroke);
  margin: 5px;
  padding: 7px;
  color: var(--color-text);
  background: ${(props) => props.color || 'inherit'};
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;

import styled from '@emotion/styled';

export const UItag = styled.button`
  font-weight: bold;
  border: 3px var(--color-stroke) solid;
  padding: 7px;
  display: inline-block;
  margin: 0px 4px;
  background: ${(props) => props.color || 'inherit'};

  &:hover {
    cursor: pointer;
  }

  & p {
    color: var(--color-stroke);
  }
`;

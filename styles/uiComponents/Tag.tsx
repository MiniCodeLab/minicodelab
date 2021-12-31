import styled from '@emotion/styled';

export const Tag = styled.div`
  font-weight: bold;
  border-radius: 8px;
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

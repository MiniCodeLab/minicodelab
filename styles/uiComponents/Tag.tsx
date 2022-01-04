import styled from '@emotion/styled';

export const Tag = styled.button`
  display: inline-block;
  background: ${(props) => props.color || 'inherit'};
  border: 3px solid var(--color-stroke);
  margin: 0px 4px;
  color: var(--color-stroke);

  font-weight: bold;
  font-size: var(--title-h2);
  padding: 7px;

  &:hover {
    cursor: pointer;
  }

  & p {
    color: var(--color-stroke);
  }
`;

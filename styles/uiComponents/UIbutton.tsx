import styled from '@emotion/styled';

export const UIbutton = styled.button`
  border: 3px solid var(--color-stroke);
  color: var(--color-stroke);
  background: var(--color-purple);
  font-weight: bold;
  font-size: var(--paragraph);
  padding: 7px;

  &:hover {
    background: var(--color-green);
  }
`;

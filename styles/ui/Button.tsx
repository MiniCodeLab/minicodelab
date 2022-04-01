import styled from '@emotion/styled';
import { tabletUp } from 'styles/global';

export const Button = styled.button<{ variant?: 'purple' | 'green' }>`
  background: var(--color-${(props) => props.variant || 'purple'});
  border-radius: 10px;
  border: 3px solid var(--color-stroke);
  color: var(--color-stroke);
  font-size: var(--title-h2);
  font-weight: bold;
  padding: 10px;

  ${tabletUp} {
    &:hover {
      background: var(--color-green);
    }
  }
`;

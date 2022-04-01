import styled from '@emotion/styled';

export const PageLayout = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  min-height: 100vh;

  > main {
    flex: 1;
    padding: var(--spacing-m);
    padding-bottom: calc(2 * var(--spacing-m));
  }

  hr {
    background-color: #2d2d2d;
    border: none;
    height: 1px;
  }
`;

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
    padding-top: var(--spacing-m);
  }

  a {
    color: var(--color-paragraph);
    text-decoration: underline;
  }
`;

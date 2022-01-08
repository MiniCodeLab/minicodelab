import styled from '@emotion/styled';

export const Card = styled.div`
  background-color: var(--color-card-bg);
  border: 3px solid var(--color-stroke);
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 2.5rem;
  width: 100%;

  @media (min-width: 840px) {
    width: calc(50% - 40px);
    height: min-content;
  }

  .card-header {
    align-items: flex-start;
    display: flex;
    justify-content: space-between;

    .card-content {
      text-align: right;
      margin-left: 32px;

      >h2{
        font-size: var(--title-h1);
      }
    }

    .date-author {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap: 5px;
      margin: 8px 0;
    }
  }

  .card-body {
    margin: 10px 0;
    min-height: 72px;
  }

  .card-footer {
    align-items: center;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    margin: 10px 0;
  }

  .tag-container {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    padding-top: 4px;
  }
`;

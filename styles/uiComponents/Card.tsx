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
  }

  .card-header {
    align-items: flex-start;
    display: flex;
    justify-content: space-between;
    margin: 10px 0;

    .card-content {
      text-align: right;
      margin-left: 32px;
    }

    .date-author {
      margin: 8px 0;
      text-align: right;
    }
  }

  .card-body {
    margin: 10px 0;
  }

  .card-footer {
    align-items: flex-end;
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }
`;

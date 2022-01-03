import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  width: 100%;
  background-color: var(--color-card-bg);
  border: 3px solid var(--color-stroke);
  padding: 2.5rem;
  @media (min-width: 840px) {
    width: calc(50% - 40px);
  }
  .card-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin: 10px 0;
    .date {
      margin: 8px 0;
    }
  }
  .card-body {
    margin: 10px 0;
  }
  .card-footer {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin: 10px 0;
  }
`;

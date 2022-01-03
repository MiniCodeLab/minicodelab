import styled from '@emotion/styled';

export const UIcard = styled.div`
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
  .card-footer {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
`;

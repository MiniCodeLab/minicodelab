import styled from '@emotion/styled';

export const LayoutCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  width: 100%;
  background-color: var(--color-card-bg);
  border: 3px solid var(--color-stroke);
  padding: 20px;
  @media (min-width: 840px) {
    width: calc(50% - 40px);
  }
  .about-card-header {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }

  .about-card-body {
    margin-bottom: 15px;
    text-align: center;

    p {
      margin: 10px;
      text-align: justify;
    }
  }

  .about-card-footer {
    display: flex;
    justify-content: flex-end;
    li {
      margin-left: 5px;
    }
  }
`;

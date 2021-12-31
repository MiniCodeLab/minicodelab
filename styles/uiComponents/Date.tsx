import styled from '@emotion/styled';

export const Date = styled.div`
  text-align: center;
  flex-direction: column;
  background-color: var(--color-card-bg);
  border: 3px solid var(--color-stroke);
  padding: 2.5rem;
  border-radius: 8px;
  margin: 25px;
  width: 25vw;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 70vw;
  }

  & .date-header {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    padding-top: 0px;
    align-items: center;
  }

  & .date-header h1 {
    padding: 0px 20px;
  }

  & .date-copy {
    margin-bottom: 14px;
  }

  & .date-image-container {
    width: 100px;
    height: 100px;
    position: relative;
  }

  & .date-image {
    width: 100%;
    height: 100%;
    position: relative !important;
    object-fit: contain;
  }
  & .date-date {
    color: var(--color-purple);
    text-align: right;
    margin-bottom: 8px;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    .date-image-container {
      width: 70px;
      height: 70px;
    }
  }
`;

import styled from "@emotion/styled";

export const Card = styled.div`
  background-color: var(--color-card-bg);
  border: 3px solid var(--color-stroke);
  padding: 2.5rem;
  border-radius: 3px;
  margin: 25px;
  & .card-header {
    display: flex;
    margin-bottom: 2rem;
    padding-top: 0px;
    align-items: center;
  }
  & .card-header h1 {
    padding: 0px 20px;
  }
  & .card-copy {
    margin-bottom: 0px;
  }
  & .card-image-container {
    width: 100px;
    height: 100px;
    position: relative;
  }
  & .card-image {
    width: 100%;
    height: 100%;
    position: relative !important;
    object-fit: contain;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    .card-image-container {
      width: 70px;
      height: 70px;
    }
  }
`;

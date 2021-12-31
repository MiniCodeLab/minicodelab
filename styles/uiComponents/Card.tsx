import styled from '@emotion/styled';

export const Card = styled.div`
box-shadow: var(--box-shadow);
  background-color: var(--color-card-bg);
  border: 3px solid var(--color-stroke);
  padding: 2.5rem;
  border-radius: 8px;
  margin: 25px;
  width: 40vw;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 90vw;
  }
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
    margin-bottom: 14px;
    font-weight: bold;
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

  & .card-footer {
    display: flex;
    align-items: baseline;
  }
  & .card-date {
    color: var(--color-purple);
    font-weight: bold;
    border-radius: 8px;
    border: 3px var(--color-stroke) solid;
    padding: 7px;
    display: inline-block;
    background-color: var(--color-bg);
  @media (min-width: 320px) and (max-width: 767px) {
    .card-image-container {
      width: 70px;
      height: 70px;
    }
  }
`;

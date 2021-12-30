import styled from '@emotion/styled';

export const UiMenu = styled.nav`
  ul {
    display: flex;
    justify-content: space-around;
    margin-top: 25px;
    margin-bottom: 20px;
    padding-bottom: 30px;
    border-bottom: 3px solid var(--color-stroke);


    li {
      cursor: pointer;
    }
  }

  .icon-container,
  .colormode-icon-container {
    width: 70px;
    height: 70px;
    position: relative;
  }

  .icon,
  .colormode-icon {
    width: 100%;
    height: 100%;
    position: relative !important;
    object-fit: contain;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    .icon-container,
    .colormode-icon-container {
      width: 45px;
      height: 45px;
    }

    ul {
      position: fixed;
      bottom: 0;
      display: flex;
      justify-content: space-around;
      background-color: var(--color-bg);
      border-top: 3px solid var(--color-stroke);
      width: 100vw;
      margin: 0;
      padding: 10px;
      z-index: 1;
      

    }
  }
`;

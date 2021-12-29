import styled from '@emotion/styled';

export const UiMenu = styled.nav`
  ul {
    display: flex;
    justify-content: space-around;
    margin-top: 25px;

    li {
      cursor: pointer;
    }
  }

  .icon-container,
  .colormode-icon-container {
    width: 50px;
    height: 50px;
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
      width: 35px;
      height: 35px;
    }
  }
`;

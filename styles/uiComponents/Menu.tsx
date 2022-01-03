import styled from '@emotion/styled';

export const Menu = styled.nav`
  nav {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    .logo {
      margin: 10px 20px;
      &:hover {
        transition: 0.5s;
        transform: scale(1.2);
      }
    }
    ul {
      display: flex;
      li {
        margin: 10px 20px;
        cursor: pointer;
        a:hover {
          transition: 0.5s;
          transform: scale(1.3);
        }
      }
    }
  }
`;

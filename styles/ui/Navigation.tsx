import styled from '@emotion/styled';

export const Navigation = styled.nav`
  --icon-space: 20px;

  nav {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;

    .logo {
      margin: 10px 20px;

      &:hover {
        transition: 0.5s;
        transform: scale(1.1);
      }
    }

    ul {
      align-items: center;
      display: flex;
      gap: var(--icon-space);
      padding-right: var(--icon-space);

      li {
        cursor: pointer;

        &:hover {
          transition: 0.5s;
          transform: scale(1.5);
        }
      }
    }
  }
`;

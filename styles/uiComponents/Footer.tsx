import styled from '@emotion/styled';

export const Footer = styled.footer`
  background-color: var(--color-card-bg);
  border-top: 3px solid var(--color-stroke);
  ul {
    display: flex;
    justify-content: space-around;
    li {
      margin: 10px;
      cursor: pointer;
    }
  }
`;

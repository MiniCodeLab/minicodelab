import styled from '@emotion/styled';

export const Footer = styled.footer`
  background-color: var(--color-card-bg);
  border: 3px solid var(--color-stroke);
  padding: 20px 0 10px;
  text-align: center;

  > p {
    color: white;
    font-size: 1rem;
    margin-top: 10px;
  }

  > ul {
    display: flex;
    justify-content: center;

    li {
      margin: 10px;
      cursor: pointer;
    }
  }
`;

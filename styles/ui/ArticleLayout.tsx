import styled from '@emotion/styled';

export const ArticleLayout = styled.div`
  padding: 20px;

  h1 {
    padding-bottom: 10px;
  }

  h2,
  h3 {
    padding: 30px 0 10px;
  }

  p {
    padding: 5px 0;
  }

  img {
    display: block;
    margin: 20px auto;
    max-width: 80%;
  }

  ul {
    list-style: circle;
    padding-left: calc(2 * var(--paragraph));

    > li {
      padding: 5px 0;
    }
  }

  pre {
    margin: 10px auto;
    border-radius: var(--code-radius);

    @media (min-width: 840px) {
      margin: 20px auto;
    }
  }

  b,
  strong {
    font-weight: bold;
  }

  code:not(pre > code) {
    background-color: var(--code-block);
    border-radius: var(--code-radius);
    color: var(--code-text);
    padding: 0 var(--code-radius);
    padding-bottom: 1px;

    @media (min-width: 840px) {
      font-size: 80%;
    }
  }
`;

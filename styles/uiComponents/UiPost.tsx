import styled from '@emotion/styled';

export const UiPost = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 80px;
  text-align: justify;
  & h1,
  h2,
  p {
    margin: 20px 0;
  }

  img {
    width: 60%;
    padding: 20px 0px;
  }
  pre {
    background: var(--color-card-bg);
    border: 1px solid #ddd;
    border-radius: 8px;
    border-left: 3px solid var(--color-green);
    color: var(--color-paragraph);
    page-break-inside: avoid;
    font-family: monospace;
    line-height: 1.6;
    margin-bottom: 1.6em;
    max-width: 100%;
    overflow: auto;
    padding: 1em 1.5em;
    display: block;
    word-wrap: break-word;
    padding: 20px 0px;
  }

  pre code{
   padding: 10px;
   color: var(--color-paragraph);
   font-weight: 300;
  }

  code {
    color: var(--color-bg-toggle);
    font-weight: bold;
  }
  .post-button{
    margin: 20px;
  }
`;

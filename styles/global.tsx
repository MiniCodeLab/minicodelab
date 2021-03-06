import { css, Global } from '@emotion/react';

export const tabletUp = '@media (min-width: 840px)';
export const desktopUp = '@media (min-width: 1048px)';

export const Reset = css`
  html,
  body,
  div,
  span,
  object,
  iframe,
  figure,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  code,
  em,
  img,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  b,
  u,
  i,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  main,
  canvas,
  embed,
  footer,
  header,
  nav,
  section,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    text-size-adjust: none;
  }

  footer,
  header,
  nav,
  section,
  main {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  button {
    border: none;
    outline: none;
    color: inherit;
    font: inherit;
  }

  button:hover {
    cursor: pointer;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  input {
    -webkit-appearance: none;
  }

  b {
    font-weight: bold;
  }
`;

export const Variables = css`
  :root {
    --border-radius: 8px;
    --title-h1: 1.75rem;
    --title-h2: 1.35rem;
    --title-h3: 1rem;
    --paragraph: 1rem;
    --text-to-mobile: 1.25;
    --button-text: 0.8rem;
    --box-shadow: rgba(0, 0, 0, 0.486) 0px 5px 15px;
    --code-block: rgb(45, 45, 45);
    --code-text: rgb(204, 153, 205);
    --code-radius: 4px;
    --card-max-width-mb: 350px;
    --card-max-width-tb: 400px;
    --card-max-width-dk: 500px;
    --spacing-m: 20px;
  }
`;

export const Themes = css`
  html[data-theme='light'] {
    --color-bg: #fffffe;
    --color-card-bg: #94a1b2;
    --color-title: #010101;
    --color-paragraph: #16161a;
    --color-stroke: #010101;
    --color-purple: #7f5af0;
    --color-green: #2cb67d;
  }

  html,
  html[data-theme='dark'] {
    --color-bg: #16161a;
    --color-card-bg: #242629;
    --color-title: #fffffe;
    --color-paragraph: #94a1b2;
    --color-stroke: #010101;
    --color-purple: #7f5af0;
    --color-green: #2cb67d;
  }
`;

export const AppStyles = css`
  html,
  body {
    background: var(--color-bg);
    color: var(--color-text);
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
      Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 100%;
    margin: 0;
    padding: 0;
    transition: background 0.25s ease-in-out;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--color-title);
    font-weight: bold;
  }

  h1,
  h2,
  h3 {
    padding: var(--spacing-m) 0;
  }

  h1 {
    font-size: var(--title-h1);
    padding-top: 0;
  }

  h2 {
    font-size: var(--title-h2);
  }

  h3 {
    font-size: var(--title-h3);
  }

  a {
    color: var(--color-paragraph);
    text-decoration: underline;
  }

  p,
  a,
  li {
    color: var(--color-paragraph);
    font-size: var(--paragraph);
    line-height: 140%;
    padding: calc(var(--spacing-m) / 2) 0;
  }

  button {
    font-size: var(--button-text);
  }

  .post-button {
    display: flex;
    justify-content: center;
    margin: 20px;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    border-bottom-left-radius: var(--code-radius);
    border-bottom-right-radius: var(--code-radius);
    background: var(--color-card-bg);
  }

  ::-webkit-scrollbar-thumb {
    border-bottom-left-radius: var(--code-radius);
    border-bottom-right-radius: var(--code-radius);
    background: var(--color-stroke);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-stroke);
  }
  /* END - GLOBAL STYLES */

  /* MEDIA DESKTOP */
  ${tabletUp} {
    h1 {
      font-size: calc(var(--title-h1) * (var(--text-to-mobile)));
    }

    h2 {
      font-size: calc(var(--title-h2) * (var(--text-to-mobile)));
    }

    h3 {
      font-size: calc(var(--title-h3) * (var(--text-to-mobile)));
    }

    p,
    a,
    li {
      font-size: calc(var(--paragraph) * (var(--text-to-mobile)));
    }

    button {
      font-size: calc(var(--button-text) * (var(--text-to-mobile)));
    }
  }
`;

export const globalStyles = (
  <Global
    styles={css`
      ${Reset}
      ${Variables}
      ${Themes}
      ${AppStyles}
    `}
  />
);

import styled from '@emotion/styled';
import { ReferencesWrapper } from 'components/ReferencesStack';
import { IframeWrapper } from 'components/YoutubeVideo';

export const ArticleLayout = styled.div`
  --base-padding: 10px;
  --base-padding-dk: calc(var(--base-padding) * 2);

  padding: var(--base-padding);

  @media (min-width: 840px) {
    padding: var(--base-padding-dk);
  }

  > h1 {
    padding-bottom: var(--base-padding);

    @media (min-width: 840px) {
      padding-bottom: var(--base-padding-dk);
    }
  }

  > h2,
  > h3 {
    padding: 30px 0 var(--base-padding);

    @media (min-width: 840px) {
      padding: 30px 0 var(--base-padding-dk);
    }
  }

  > p {
    padding: 10px 0;
  }

  > img {
    display: block;
    margin: var(--base-padding) auto;
    max-width: 80%;

    @media (min-width: 840px) {
      margin: var(--base-padding-dk) auto;
    }
  }

  > ul {
    list-style: circle;
    padding-left: calc(2 * var(--paragraph));

    > li {
      padding: calc(var(--base-padding) / 2) 0;

      @media (min-width: 840px) {
        padding: var(--base-padding) 0;
      }
    }
  }

  pre {
    margin: var(--base-padding) auto;
    border-radius: var(--code-radius);

    @media (min-width: 840px) {
      margin: var(--base-padding-dk) auto;
    }
  }

  > hr {
    background-color: #2d2d2d;
    border: none;
    height: 1px;
  }

  b,
  strong {
    font-weight: bold;
  }

  u {
    color: inherit;
    display: block;
    margin-top: var(--spacing-m);
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

  ${ReferencesWrapper} {
    margin: var(--spacing-m) 0;
  }

  ${IframeWrapper} {
    margin: var(--spacing-m) auto;
  }
`;

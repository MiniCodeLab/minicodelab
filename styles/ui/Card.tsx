import styled from '@emotion/styled';
import { desktopUp, tabletUp } from 'styles/global';

export const CardsWrapper = styled.div`
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  gap: 20px;
  justify-content: center;
  padding: 20px 0;

  &::after {
    content: ' ';
    display: block;
    width: 100%;
    max-width: var(--card-max-width-mb);

    ${tabletUp} {
      max-width: var(--card-max-width-tb);
    }

    ${desktopUp} {
      max-width: var(--card-max-width-dk);
    }
  }
`;

export const Card = styled.article`
  background-color: var(--color-card-bg);
  border-radius: 15px;
  border: 3px solid var(--color-stroke);
  display: flex;
  flex-direction: column;
  max-width: var(--card-max-width-mb);
  padding: 20px;
  width: 100%;

  ${tabletUp} {
    max-width: var(--card-max-width-tb);
  }

  ${desktopUp} {
    max-width: var(--card-max-width-dk);
  }
`;

export const CardHeader = styled.div<{ isArticle?: boolean }>`
  align-items: flex-start;
  display: flex;
  flex-direction: ${({ isArticle }) => (isArticle ? 'row' : 'column')};
  gap: 10px;

  ${tabletUp} {
    margin-bottom: var(--spacing-m);
  }
`;

export const CardMediaContent = styled.div<{ isArticle?: boolean }>`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: ${({ isArticle }) => (isArticle ? 'space-between' : 'flex-end')};
  text-align: ${({ isArticle }) => (isArticle ? 'left' : 'center')};
`;

export const CardNetworks = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  padding-top: 20px;
`;

export const CardTitle = styled.div`
  flex: 1;
  text-align: right;

  > h2 {
    padding: 0;
    padding-bottom: calc(var(--spacing-m) / 2);
  }

  > p {
    font-size: var(--paragraph);

    a {
      font-size: var(--paragraph);
    }
  }
`;

export const CardArticleLink = styled.div`
  margin-top: calc(var(--spacing-m) / 2);
  text-align: right;
`;

import styled from '@emotion/styled';

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

    @media (min-width: 840px) {
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

  @media (min-width: 840px) {
    max-width: var(--card-max-width-dk);
  }
`;

export const CardHeader = styled.div<{ isArticle?: boolean }>`
  display: flex;
  flex-direction: ${({ isArticle }) => (isArticle ? 'row' : 'column')};
  margin-bottom: 20px;
  gap: 10px;
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
    margin-bottom: 10px;
  }

  > p {
    font-size: 1rem;
  }
`;

export const CardArticleLink = styled.div`
  margin-top: 20px;
  text-align: right;
`;

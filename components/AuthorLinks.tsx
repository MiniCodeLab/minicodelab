import styled from '@emotion/styled';
import React from 'react';
import { Author } from 'types/common';
import { getPostAuthor } from 'utils/common';

export type Props = { authors: Author | Author[] };

const AuthorLinksWithName = ({ authors }: Props) => {
  return (
    <Wrapper>
      <p>Artículo por: {getPostAuthor(authors, 'name')}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 0.5rem;
  text-align: right;

  > p {
    padding-top: 0;
  }
`;

export default AuthorLinksWithName;

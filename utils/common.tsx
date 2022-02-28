import React from 'react';
import { Author } from 'types/common';

export const getPostAuthor = (authorData: Author | Author[]) => {
  const authorArr = Array.isArray(authorData) ? authorData : [authorData];
  console.log({ authorData, authorArr });
  return authorArr.map(({ tag, link }) => (
    <React.Fragment key={tag}>
      {' '}
      <a href={link} target="_blank" rel="noopener noreferrer">
        {tag}
      </a>
    </React.Fragment>
  ));
};

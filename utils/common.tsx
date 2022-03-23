import React from 'react';
import { Author } from 'types/common';

export const getPostAuthor = (authorData: Author | Author[]) => {
  const authorArr = Array.isArray(authorData) ? authorData : [authorData];

  return authorArr.map(({ tag, link }) => (
    <React.Fragment key={tag}>
      {' '}
      <a href={link} target="_blank" rel="noopener noreferrer">
        {tag}
      </a>
    </React.Fragment>
  ));
};

export const getMetaAuthor = (authorData: Author | Author[]) => {
  const authorArr = Array.isArray(authorData) ? authorData : [authorData];

  return authorArr.map(({ tag }) => tag).join(', ');
};

const defaultLogoUrl =
  'https://res.cloudinary.com/db38x6luj/image/upload/c_scale,h_600,w_600/v1646084982/posts/logo-networks.png';

export const getMetaData = ({
  author,
  description,
  logoUrl = defaultLogoUrl,
  title
}: {
  author?: Author | Author[];
  description: string;
  logoUrl?: string;
  title: string;
}) => (
  <>
    <meta name="description" content={description} />
    {author ? <meta name="author" content={getMetaAuthor(author)} /> : null}

    <meta property="og:title" content={title} />
    <meta property="og:description" content={title} />
    <meta property="og:image" content={logoUrl} />
    <meta property="og:image:url" content={logoUrl} />
    <meta property="twitter:image" content={logoUrl} />
    <meta property="og:type" content="article" />
    <meta property="og:locale" content="es_ES" />
  </>
);

export const deduplicate = <T extends {}>(arr: T[]) => [...new Set(arr)];
export const mapBy = <T extends {}>(entities: T[], field: string): string[] =>
  entities.flatMap((cover) => cover[field]);

export const sortByDate = <T extends { date: string }>(entities: T[]): T[] =>
  [...entities].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export type Profile = {
  github: string | null;
  instagram: string | null;
  linkedin: string | null;
  name: string;
  photo: string;
  position: string;
  twitter: string | null;
};

export type Author = {
  tag: string;
  link: string;
};

export type PostCover = {
  slug: string;
} & Metadata;

export type Metadata = {
  author: Author;
  cover: string;
  date: string;
  description: string;
  tags: string[];
  title: string;
};

export type Video = {
  cover: string;
  date: string;
  description: string;
  link: string;
  relatedArticles: string[];
  title: string;
};

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
  link: string;
  name: string;
  tag: string;
};

export type PostCover = {
  slug: string;
} & Metadata;

export type RawMetadata = {
  author: string[];
  cover: string;
  date: string;
  description: string;
  tags: string[];
  title: string;
};

export type Metadata = Omit<RawMetadata, 'author'> & {
  author: Author | Author[];
};

export type Video = {
  cover: string;
  date: string;
  description: string;
  link: string;
  relatedArticles: string[];
  title: string;
};

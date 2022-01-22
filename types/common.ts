export type Profile = {
  github: string | null;
  instagram: string | null;
  linkedin: string | null;
  name: string;
  photo: string;
  position: string;
  twitter: string | null;
};

export type PostCover = {
  slug: string;
} & Metadata;

export type Metadata = {
  author: string;
  cover: string;
  date: string;
  description: string;
  title: string;
};

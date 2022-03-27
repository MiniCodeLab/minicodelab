import { readdirSync, readFileSync } from 'fs';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { join } from 'path';
import { Author, Metadata, PostCover, RawMetadata } from 'types/common';
import { getAuthorsData } from './dataSources';

export const POSTS_PATH = 'posts';
export const POSTS_METADATA_PATH = 'posts-metadata';

const authors = getAuthorsData();

export const getAuthorsByTags = (tags: string[]): Author[] => {
  return tags.map((tag) => authors[tag] as Author);
};

export const getPostMetadata = (slug: string): Metadata => {
  const stringMetadata = readFileSync(
    join(process.cwd(), `${POSTS_METADATA_PATH}/${slug}.json`)
  ).toString();

  const metadata = JSON.parse(stringMetadata) as RawMetadata;

  return { ...metadata, author: getAuthorsByTags(metadata.author) };
};

export const retrievePostsCovers = (): PostCover[] => {
  const postsNames = readdirSync(join(process.cwd(), POSTS_METADATA_PATH));

  const covers: PostCover[] = postsNames.map((name) => {
    const slug = name.split('.')[0];
    const metadata = getPostMetadata(slug);

    return {
      slug,
      ...metadata
    };
  });

  return covers;
};

export const getPostsPaths = (): string[] => {
  const posts = readdirSync(join(process.cwd(), POSTS_PATH)).map(
    (filename) => `/feed/${filename.split('.')[0]}`
  );

  return posts;
};

export const getPostContent = async (
  slug: string
): Promise<MDXRemoteSerializeResult<Record<string, unknown>>> => {
  const source = readFileSync(join(process.cwd(), `${POSTS_PATH}/${slug}.mdx`)).toString();
  return serialize(source);
};

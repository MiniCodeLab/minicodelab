import { readdirSync, readFileSync } from 'fs';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { join } from 'path';
import { Metadata, PostCover } from 'types/common';

export const POSTS_PATH = 'posts';
export const POSTS_METADATA_PATH = 'posts-metadata';

export const retrievePostsCovers = (): PostCover[] => {
  const postsNames = readdirSync(join(process.cwd(), POSTS_METADATA_PATH));

  const covers: PostCover[] = postsNames.map((name) => {
    const stringMetadata = readFileSync(
      join(process.cwd(), `${POSTS_METADATA_PATH}/${name}`)
    ).toString();

    const metadata = JSON.parse(stringMetadata) as Metadata;
    const slug = name.split('.')[0];

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
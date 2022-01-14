import Layout from 'components/Layout';
import { readdirSync, readFileSync } from 'fs';
import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { join } from 'path';
import { ArticleLayout } from 'styles/ui/ArticleLayout';

const components = {};

export default function TestPage({ source }) {
  return (
    <Layout>
      <ArticleLayout>
        <MDXRemote {...source} components={components} />
      </ArticleLayout>
    </Layout>
  );
}

type Props = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
};

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const posts = readdirSync(join(process.cwd(), `posts`)).map(
    (filename) => `/feed/${filename.split('.')[0]}`
  );

  return {
    paths: posts,
    fallback: 'blocking'
  };
}

export const getStaticProps = async ({
  params
}: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> => {
  const source = readFileSync(join(process.cwd(), `posts/${params.id}.mdx`)).toString();
  return { props: { source: await serialize(source) } };
};

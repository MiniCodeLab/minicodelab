import Layout from 'components/Layout';
import { getPostContent, getPostsPaths } from 'libs/posts';
import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
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
  return {
    paths: getPostsPaths(),
    fallback: 'blocking'
  };
}

export const getStaticProps = async ({
  params
}: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> => {
  return { props: { source: await getPostContent(params.slug as string) } };
};

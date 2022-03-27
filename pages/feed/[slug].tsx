import AuthorLinksWithName from 'components/AuthorLinks';
import CodeBlock from 'components/CodeBlock';
import Layout from 'components/Layout';
import ReferencesStack from 'components/ReferencesStack';
import YoutubeVideo from 'components/YoutubeVideo';
import { getPostContent, getPostMetadata, getPostsPaths } from 'libs/posts';
import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ArticleLayout } from 'styles/ui/ArticleLayout';
import { Metadata } from 'types/common';
import { getMetaData } from 'utils/common';

const components = {
  code: CodeBlock,
  ReferencesStack,
  YoutubeVideo
};

export default function Article({ source, meta }: Props) {
  return (
    <>
      <Layout
        title={meta.title}
        headChildren={getMetaData({
          title: meta.title,
          description: meta.description,
          author: meta.author
        })}
      >
        <ArticleLayout>
          <AuthorLinksWithName authors={meta.author} />
          <MDXRemote {...source} components={components} />
        </ArticleLayout>
      </Layout>

      <ToastContainer theme="light" limit={1} pauseOnFocusLoss={false} />
    </>
  );
}

type Props = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: Metadata;
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
  return {
    props: {
      source: await getPostContent(params.slug as string),
      meta: getPostMetadata(params.slug as string)
    }
  };
};

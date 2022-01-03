import { GetServerSidePropsResult } from 'next';
import { Post } from 'types/notion';
import Head from 'next/head';
import Link from 'next/link';

import { UiPost } from '../../styles/uiComponents/UiPost';
import Menu from 'components/Menu';
import { UImenu } from 'styles/uiComponents/UImenu';
import { UIbutton } from 'styles/uiComponents/UIbutton';
const Post = ({ post }) => {
  return (
    <div>
      <Head>
        <title>Mini Code Lab {'/>'} Feed</title>
        <link rel="icon" href="/flask.png" />
      </Head>

      <UImenu>
        <Menu />
      </UImenu>
      <UiPost dangerouslySetInnerHTML={{ __html: post }} />
      <Link href="/">
        <UIbutton>Volver al feed</UIbutton>
      </Link>
    </div>
  );
};

export type Props = {
  post: string;
};

export const getServerSideProps = async ({ params }): Promise<GetServerSidePropsResult<Props>> => {
  const res = await fetch(`https://potion-api.now.sh/html?id=${params.id}`);
  const resText = await res.text();
  return {
    props: {
      post: resText
    }
  };
};

export default Post;

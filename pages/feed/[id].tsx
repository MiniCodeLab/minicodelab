import { GetServerSidePropsResult } from 'next';
import { Post } from 'types/notion';
import Head from 'next/head';
import Link from 'next/link';

import { UiPost } from '../../styles/uiComponents/UiPost';
import Menu from 'components/Menu';
import { UiMenu } from 'styles/uiComponents/UiMenu';
import { Button } from 'styles/uiComponents/Button';
const Post = ({ post }) => {
  return (
    <div>
      <Head>
        <title>Mini Code Lab {'/>'} Feed</title>
        <link rel="icon" href="/flask.png" />
      </Head>

      <UiMenu>
        <Menu />
      </UiMenu>
      <UiPost dangerouslySetInnerHTML={{ __html: post }} />
      <Link href="/feed">
        <Button>Volver al feed</Button>
      </Link>
    </div>
  );
};

export type Props = {
  post: string;
};

export const getServerSideProps = async ({ params }): Promise<GetServerSidePropsResult<Props>> => {
  const res = await fetch(`https://potion-api.now.sh/html?id=${params.id}`);
  console.log(res.body);
  const resText = await res.text();
  console.log(resText);
  return {
    props: {
      post: resText
    }
  };
};

export default Post;

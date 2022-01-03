import { GetServerSidePropsResult } from 'next';
import { Post } from 'types/notion';
import Head from 'next/head';
import Link from 'next/link';

import { Post as PostUi } from '../../styles/uiComponents/Post';
import Menu from 'components/Menu';
import Footer from 'components/Footer';
import { Menu as Nav } from 'styles/uiComponents/Menu';
import { Button } from 'styles/uiComponents/Button';
const PostById = ({ post }) => {
  return (
    <div>
      <Head>
        <title>Mini Code Lab {'/>'} Feed</title>
        <link rel="icon" href="/flask.png" />
      </Head>

      <Nav>
        <Menu />
      </Nav>
      <PostUi dangerouslySetInnerHTML={{ __html: post }} />
      <Link href="/">
        <div className="post-button">
          <Button>Volver al feed</Button>
        </div>
      </Link>
      <Footer />
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

export default PostById;

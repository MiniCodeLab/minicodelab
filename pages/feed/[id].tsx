import Layout from 'components/Layout';
import { GetServerSidePropsResult } from 'next';
import Link from 'next/link';
import { Button } from 'styles/ui/Button';
import { Post as PostUi } from '../../styles/ui/Post';

const PostPage = ({ post }) => {
  return (
    <Layout title="Feed">
      <PostUi dangerouslySetInnerHTML={{ __html: post }} />

      <Link href="/" passHref>
        <a>
          <div className="post-button">
            <Button>Volver al feed</Button>
          </div>
        </a>
      </Link>
    </Layout>
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

export default PostPage;

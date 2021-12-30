import { GetServerSidePropsResult } from 'next';
import { Post } from 'types/notion';

const Post: React.FC<Props> = ({ post }) => {
  return <div dangerouslySetInnerHTML={{ __html: post }} />;
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

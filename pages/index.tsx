import FeedFilter from 'components/FeedFilter';
import FeedList from 'components/FeedList';
import Layout from 'components/Layout';
import { retrievePostsCovers } from 'libs/posts';
import { GetStaticPropsResult } from 'next';
import { useState } from 'react';
import { PostCover } from 'types/common';
import { getMetaData } from 'utils/common';

const HomePage: React.FC<Props> = ({ covers }) => {
  const [filteredCovers, setFilteredCovers] = useState(covers);

  return (
    <Layout
      title="MiniCodeLab"
      headChildren={getMetaData({
        title: 'MiniCodeLab',
        description:
          'Feed de MiniCodeLab. Descubre y aprende con nuestros artículos de JavaScript, TypeScript, React, Node...'
      })}
    >
      <FeedFilter covers={covers} onChangeCovers={setFilteredCovers} />
      <FeedList covers={filteredCovers} />
    </Layout>
  );
};

export type Props = {
  covers: PostCover[];
};

export const getStaticProps = async (): Promise<GetStaticPropsResult<Props>> => {
  return {
    props: {
      covers: await retrievePostsCovers()
    },
    revalidate: 3600
  };
};

export default HomePage;

import styled from '@emotion/styled';
import FeedList from 'components/FeedList';
import Layout from 'components/Layout';
import Loader from 'components/Loader';
import { retrievePostsCovers } from 'libs/posts';
import { GetStaticPropsResult } from 'next';
import dynamic from 'next/dynamic';
import { PostCover } from 'types/common';
import { getMetaData, sortByDate } from 'utils/common';

const Toastcontainer = dynamic(() => import('components/ToastContainer'));
const CanvasScene = dynamic(() => import('components/ThreeScene'), {
  loading: () => <Loader />,
  ssr: false
});

const errorPage = ({ covers }: Props) => {
  return (
    <Layout
      title="Recurso no encontrado"
      headChildren={getMetaData({
        title: 'MiniCodeLab /> Recurso no encontrado',
        description: 'No hemos encontrado el recurso que buscas y MiniCody se ha puesto triste'
      })}
    >
      <h1>No hemos encontrado el artículo que buscabas...</h1>
      <h3>
        Mira que triste está MiniCody al no poder encontrarlo, ¿qué te parece si le animamos leyendo
        otro artículo?
      </h3>
      <hr />

      <CanvasScene />

      <hr />

      <RecommendedSection>
        <p>
          Te dejamos por aquí los últimos dos artículos que hemos publicado como recomendación 🧙‍♂️
        </p>

        <FeedList covers={covers} />
      </RecommendedSection>

      <Toastcontainer theme="light" limit={1} pauseOnFocusLoss={false} />
    </Layout>
  );
};

export type Props = {
  covers: PostCover[];
};

export const RecommendedSection = styled.div`
  text-align: center;
`;

export const getStaticProps = async (): Promise<GetStaticPropsResult<Props>> => {
  return {
    props: {
      covers: sortByDate(await retrievePostsCovers()).slice(0, 2)
    },
    revalidate: 3600
  };
};

export default errorPage;

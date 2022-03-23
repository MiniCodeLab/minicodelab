import Layout from 'components/Layout';
import { getCalendarContent } from 'libs/dataSources';
import { GetStaticPropsResult } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'styles/ui/Button';
import {
  Card,
  CardArticleLink,
  CardHeader,
  CardMediaContent,
  CardsWrapper,
  CardTitle
} from 'styles/ui/Card';
import { Video } from 'types/common';
import { getFormattedDate, getMetaData, sortByDate } from 'utils/common';

const VideoPage: React.FC<Props> = ({ videos }) => {
  return (
    <Layout
      title="Videos"
      headChildren={getMetaData({
        title: 'MiniCodeLab Videos',
        description:
          'Listado de videos en Youtube de MiniCodeLab. Aprende los talleres y charlas de la comunidad.'
      })}
    >
      <CardsWrapper>
        {sortByDate(videos).map((video, idx) => (
          <Card key={idx}>
            <CardHeader isArticle>
              <Image src={video.cover} alt={video.title} width={60} height={60} />

              <CardTitle>
                <h2>{video.title}</h2>
                <p>{getFormattedDate(video.date)}</p>
              </CardTitle>
            </CardHeader>

            <CardMediaContent isArticle>
              <p>{video.description}</p>

              <CardArticleLink>
                {(video.relatedArticles || []).map((article, artIndex) => (
                  <Link key={article} href={article} passHref>
                    <a>
                      <Button className="article-link">
                        Artículo {artIndex ? artIndex + 1 : ''}
                      </Button>
                    </a>
                  </Link>
                ))}

                <a href={video.link} target="_blank" rel="noreferrer noopener">
                  <Button>Video</Button>
                </a>
              </CardArticleLink>
            </CardMediaContent>
          </Card>
        ))}
      </CardsWrapper>
    </Layout>
  );
};

export type Props = {
  videos: Video[];
};

export const getStaticProps = async (): Promise<GetStaticPropsResult<Props>> => {
  return {
    props: {
      videos: await getCalendarContent()
    },
    revalidate: 3600
  };
};

export default VideoPage;

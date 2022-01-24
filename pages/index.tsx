import Layout from 'components/Layout';
import { retrievePostsCovers } from 'libs/posts';
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
import { PostCover } from 'types/common';

const HomePage: React.FC<Props> = ({ covers }) => {
  return (
    <Layout>
      <CardsWrapper>
        {covers
          .sort((a, b) => new Date(b.date).getDate() - new Date(a.date).getDate())
          .map((post) => (
            <Card key={post.slug}>
              <CardHeader isArticle>
                <div>
                  <Image src={post.cover} alt={post.title} width={60} height={60} layout="fixed" />
                </div>

                <CardTitle>
                  <h2>{post.title}</h2>
                  <p>Creado por: {post.author}</p>
                </CardTitle>
              </CardHeader>

              <CardMediaContent isArticle>
                <p>{post.description}</p>

                <CardArticleLink>
                  <Link href={`/feed/${post.slug}`} passHref>
                    <a>
                      <Button>Leer más</Button>
                    </a>
                  </Link>
                </CardArticleLink>
              </CardMediaContent>
            </Card>
          ))}
      </CardsWrapper>
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

import { Client } from '@notionhq/client';
import Layout from 'components/Layout';
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
import { DatabaseResponse, Post } from 'types/notion';

const HomePage: React.FC<Props> = ({ posts }) => {
  return (
    <Layout>
      <CardsWrapper>
        {posts.map((post) => (
          <Card key={post.id}>
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
                <Link href={`/feed/${post.post_id}`} passHref>
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
  posts: Post[];
};

export const getStaticProps = async (): Promise<GetStaticPropsResult<Props>> => {
  const notion = new Client({
    auth: process.env.NEXT_PUBLIC_NOTION_POST_SECRET
  });

  const databaseId = process.env.NEXT_PUBLIC_NOTION_POST_DB_ID;

  const data = (await notion.databases.query({
    database_id: databaseId
  })) as unknown as DatabaseResponse;

  const posts = data.results.map((databaseRow) => {
    return {
      id: databaseRow.id,
      post_id: databaseRow.properties.post_id.rich_text[0].plain_text,
      title: databaseRow.properties.title.title[0].text.content,
      cover: databaseRow.properties.cover.rich_text[0].plain_text,
      author: databaseRow.properties.author.rich_text[0].plain_text,
      description: databaseRow.properties.description.rich_text[0].plain_text,
      tags: databaseRow.properties.tags.multi_select,
      date: databaseRow.properties.date.date.start
    };
  });

  return {
    props: {
      posts
    },
    revalidate: 300
  };
};

export default HomePage;

import Head from 'next/head';
import Link from 'next/link';
import { Client } from '@notionhq/client';

import Menu from 'components/Menu';
import { UiMenu } from 'styles/uiComponents/UiMenu';
import { DatabaseResponse, Post } from 'types/notion';

const Feed: React.FC<Props> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Mini Code Lab {'/>'} Feed</title>
        <link rel="icon" href="/flask.png" />
      </Head>

      <UiMenu>
        <Menu />
      </UiMenu>

      {posts.map((post) => (
        <h1 key={post.id}>
          <Link href={`/feed/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </h1>
      ))}
    </div>
  );
};

export type Props = {
  posts: Post[];
};

export const getStaticProps = async () => {
  const notion = new Client({
    auth: process.env.NEXT_PUBLIC_NOTION_SECRET
  });

  const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;

  const data = (await notion.databases.query({
    database_id: databaseId
  })) as unknown as DatabaseResponse;

  const posts = data.results.map((databaseRow) => {
    return {
      id: databaseRow.id,
      title: databaseRow.properties.title.title[0].text.content
    };
  });

  return {
    props: {
      posts
    }
  };
};

export default Feed;

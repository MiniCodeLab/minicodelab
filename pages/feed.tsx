import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { DatabaseResponse, Post } from 'types/notion';
import { Client } from '@notionhq/client';

import Menu from 'components/Menu';
import { UiContentPage } from 'styles/uiComponents/UiContentPage';
import { UiMenu } from 'styles/uiComponents/UiMenu';
import { Card } from 'styles/uiComponents/Card';
import { Button } from 'styles/uiComponents/Button';
import { FlexWrap } from 'styles/uiComponents/FlexWrap';
import { Tag } from 'styles/uiComponents/Tag';

const Feed: React.FC<Props> = ({ posts }) => {
  console.log(posts);
  return (
    <UiContentPage>
      <Head>
        <title>Mini Code Lab {'/>'} Feed</title>
        <link rel="icon" href="/flask.png" />
      </Head>

      <UiMenu>
        <Menu />
      </UiMenu>
      <FlexWrap>
        {posts.map((post) => (
          <Card key={post.id}>
            <div className="card-header">
              <div className="card-image-container">
                <Image src={post.cover} alt={post.title} layout="fill" className="card-image" />
              </div>
              <h1>{post.title}</h1>
            </div>
            <p className="card-copy">{post.description}</p>
            <div className="card-footer">
              <p className="card-date">{post.date}</p>
              {post.tags.map((tag) => {
                return (
                  <Tag color={tag.color} key={tag.id}>
                    <p>{tag.name}</p>
                  </Tag>
                );
              })}
              <Link href={`/feed/${post.post_id}`}>
                <Button>Leer más</Button>
              </Link>
            </div>
          </Card>
        ))}
      </FlexWrap>
    </UiContentPage>
  );
};

export type Props = {
  posts: Post[];
};

export const getStaticProps = async () => {
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
      cover: databaseRow.properties.cover.files[0].file.url,
      author: databaseRow.properties.author.rich_text[0].plain_text,
      description: databaseRow.properties.description.rich_text[0].plain_text,
      tags: databaseRow.properties.tags.multi_select,
      date: databaseRow.properties.date.date.start
    };
  });

  return {
    props: {
      posts
    }
  };
};

export default Feed;

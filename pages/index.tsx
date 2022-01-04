import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { DatabaseResponse, Post } from 'types/notion';
import { Client } from '@notionhq/client';

import Menu from 'components/Menu';
import Footer from 'components/Footer';

import { Menu as Nav } from 'styles/uiComponents/Menu';
import { Card } from 'styles/uiComponents/Card';
import { Button } from 'styles/uiComponents/Button';
import { List } from 'styles/uiComponents/List';
import { Tag } from 'styles/uiComponents/Tag';

const Home: React.FC<Props> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Mini Code Lab {'/>'}</title>
        <link rel="icon" href="/flask.png" />
      </Head>
      <Nav>
        <Menu />
      </Nav>

      <List>
        {posts.map((post) => (
          <Card key={post.id}>
            <div className="card-header">
              <Image src={post.cover} alt={post.title} width={50} height={50} />
              <div>
                <h1>{post.title}</h1>
                <p className="date-author">{post.date} - {post.author}</p>
              </div>
            </div>
            <div className="card-body">
              <p>{post.description}</p>
            </div>
            <div className="card-footer">
              <Link href={`/feed/${post.post_id}`}>
                <Button>Leer más</Button>
              </Link>
              <div>
                {post.tags.map((tag) => {
                  return (
                    <Tag color={tag.color} key={tag.id}>
                      {tag.name}
                    </Tag>
                  );
                })}
              </div>
            </div>
          </Card>
        ))}
      </List>
      <Footer />
    </div>
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

export default Home;

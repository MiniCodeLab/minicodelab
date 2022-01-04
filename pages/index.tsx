import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { DatabaseResponse, Post } from 'types/notion';
import { Client } from '@notionhq/client';

import Menu from 'components/Menu';
import Footer from 'components/Footer';

import { Menu as Nav } from 'styles/uiComponents/Menu';
import { Card } from 'styles/uiComponents/Card';
import { Button } from 'styles/uiComponents/Button';
import { List } from 'styles/uiComponents/List';
import { Tag } from 'styles/uiComponents/Tag';
import { GetStaticPropsResult } from 'next';

const Home: React.FC<Props> = ({ posts }) => {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  const handleClick = (name) => {
    setFilteredPosts(posts.filter((post) => post.tags.find((tag) => tag.name === name)));
  };

  return (
    <div>
      <Head>
        <title>Mini Code Lab {'/>'}</title>
        <link rel="icon" href="/images/flask.png" />
      </Head>

      <Nav>
        <Menu />
      </Nav>
      <List>
        {(filteredPosts.length ? filteredPosts : posts).map((post) => (
          <Card key={post.id}>
            <div className="card-header">
              <div className="card-image">
                <Image src={post.cover} alt={post.title} width={60} height={60} layout="fixed" />
              </div>

              <div className="card-content">
                <h1>{post.title}</h1>
                <p className="date-author">
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                </p>
              </div>
            </div>

            <div className="card-body">
              <p>{post.description}</p>
            </div>

            <div className="card-footer">
              <Link href={`/feed/${post.post_id}`} passHref>
                <a>
                  <Button>Leer más</Button>
                </a>
              </Link>
              <div>
                {post.tags.map((tag) => {
                  return (
                    <Tag color={tag.color} key={tag.id} onClick={() => handleClick(tag.name)}>
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
    },
    revalidate: 3600
  };
};

export default Home;

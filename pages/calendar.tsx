import Head from 'next/head';
import Image from 'next/image';
import { DatabaseResponse, Calendar } from 'types/notion';
import { Client } from '@notionhq/client';

import Menu from 'components/Menu';
import Footer from 'components/Footer';

import { Menu as Nav } from 'styles/uiComponents/Menu';
import { Card } from 'styles/uiComponents/Card';
import { List } from 'styles/uiComponents/List';
import { Button } from 'styles/uiComponents/Button';
import { Tag } from 'styles/uiComponents/Tag';

const Feed: React.FC<Props> = ({ calendar }) => {
  return (
    <div>
      <Head>
        <title>Mini Code Lab {'/>'} Feed</title>
        <link rel="icon" href="/flask.png" />
      </Head>

      <Nav>
        <Menu />
      </Nav>
      <List>
        {calendar.map((date) => (
          <Card key={date.id}>
            <div className="card-header">
              <Image src={date.cover} alt={date.title} width={48} height={48} />
              <div>
                <h1>{date.title}</h1>
                <p className="date">{date.date}</p>
              </div>
            </div>
            <div className="card-body">
              <p>{date.description}</p>
            </div>
            <div className="card-footer">
              <Button>Link</Button>
              <div>
                {date.tags.map((tag) => {
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
  calendar: Calendar[];
};

export const getStaticProps = async () => {
  const notion = new Client({
    auth: process.env.NEXT_PUBLIC_NOTION_CALENDAR_SECRET
  });

  const databaseId = process.env.NEXT_PUBLIC_NOTION_CALENDAR_DB_ID;

  const data = (await notion.databases.query({
    database_id: databaseId
  })) as unknown as DatabaseResponse;

  const calendar = data.results.map((databaseRow) => {
    return {
      id: databaseRow.id,
      title: databaseRow.properties.title.title[0].text.content,
      cover: databaseRow.properties.cover.files[0].file.url,
      description: databaseRow.properties.description.rich_text[0].plain_text,
      tags: databaseRow.properties.tags.multi_select,
      date: databaseRow.properties.date.date.start
    };
  });

  return {
    props: {
      calendar
    }
  };
};

export default Feed;

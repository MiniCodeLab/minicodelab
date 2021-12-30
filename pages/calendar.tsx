import Head from 'next/head';
import Image from 'next/image';
import { DatabaseResponse, Calendar } from 'types/notion';
import { Client } from '@notionhq/client';

import Menu from 'components/Menu';
import { UiMenu } from 'styles/uiComponents/UiMenu';
import { Card } from 'styles/uiComponents/Card';

const Feed: React.FC<Props> = ({ calendar }) => {
  return (
    <div>
      <Head>
        <title>Mini Code Lab {'/>'} Feed</title>
        <link rel="icon" href="/flask.png" />
      </Head>

      <UiMenu>
        <Menu />
      </UiMenu>

      {calendar.map((date) => (
        <Card key={date.id}>
          <div className="card-header">
            <div className="card-image-container">
              <Image src={date.cover} alt={date.title} layout="fill" className="card-image" />
            </div>
            <h1>{date.title}</h1>
          </div>
          <p className="card-copy">{date.description}</p>
        </Card>
      ))}
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
      tags: databaseRow.properties.tags.multi_select
    };
  });

  return {
    props: {
      calendar
    }
  };
};

export default Feed;

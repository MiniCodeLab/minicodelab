import Head from 'next/head';
import Image from 'next/image';
import { DatabaseResponse, Calendar } from 'types/notion';
import { Client } from '@notionhq/client';

import Menu from 'components/Menu';
import { UiMenu } from 'styles/uiComponents/UiMenu';
import { Date } from 'styles/uiComponents/Date';
import { FlexWrap } from 'styles/uiComponents/FlexWrap';
import { Button } from 'styles/uiComponents/Button';

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
      <FlexWrap>
        {calendar.map((date) => (
          <Date key={date.id}>
            <div className="date-header">
              <div className="date-image-container">
                <Image src={date.cover} alt={date.title} layout="fill" className="date-image" />
              </div>
              <h2>{date.title}</h2>
            </div>
            <h3>{date.date}</h3>
            <p className="date-copy">{date.description}</p>
            {date.tags.map((tag) => {
              return <p className="card-tags">{tag.name}</p>;
            })}
               <Button>Link</Button>
          </Date>
        ))}
      </FlexWrap>
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

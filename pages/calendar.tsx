import Head from 'next/head';
import Image from 'next/image';
import { DatabaseResponse, Calendar } from 'types/notion';
import { Client } from '@notionhq/client';

import Menu from 'components/Menu';
import { UImenu } from 'styles/uiComponents/UImenu';
import { UIcard } from 'styles/uiComponents/UIcard';
import { UIlist } from 'styles/uiComponents/UIlist';
import { UIbutton } from 'styles/uiComponents/UIbutton';
import { UItag } from 'styles/uiComponents/UItag';

const Feed: React.FC<Props> = ({ calendar }) => {
  return (
    <div>
      <Head>
        <title>Mini Code Lab {'/>'} Feed</title>
        <link rel="icon" href="/flask.png" />
      </Head>

      <UImenu>
        <Menu />
      </UImenu>
      <UIlist>
        {calendar.map((date) => (
          <UIcard key={date.id}>
            <div className="card-header">
              <Image src={date.cover} alt={date.title} width={48} height={48} />
              <h2>{date.title}</h2>
            </div>
            <div className="card-body">
              <h3>{date.date}</h3>
              <p>{date.description}</p>
            </div>

            <div className="card-footer">
              <UIbutton>Link</UIbutton>
              <div>
                {date.tags.map((tag) => {
                  return (
                    <UItag color={tag.color} key={tag.id}>
                      <p>{tag.name}</p>
                    </UItag>
                  );
                })}
              </div>
            </div>
          </UIcard>
        ))}
      </UIlist>
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

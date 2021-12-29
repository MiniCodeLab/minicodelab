import { Client } from '@notionhq/client';
import { DatabaseResponse } from 'types/notion';

// TODO: Create proper prop types for this page props.
const Post: React.FC<{ post: any }> = ({ post }) => {
  return <pre>{JSON.stringify(post, null, 2)}</pre>;
};

export const getStaticPaths = async () => {
  const notion = new Client({
    auth: process.env.NEXT_PUBLIC_NOTION_SECRET
  });

  const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;

  const data = (await notion.databases.query({
    database_id: databaseId
  })) as unknown as DatabaseResponse;

  const paths = data.results.map((databaseRow) => {
    return {
      params: {
        id: databaseRow.id
      }
    };
  });

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const notion = new Client({
    auth: process.env.NEXT_PUBLIC_NOTION_SECRET
  });

  const page = await notion.pages.retrieve({
    page_id: id
  });

  return {
    props: {
      post: page
    }
  };
};

export default Post;

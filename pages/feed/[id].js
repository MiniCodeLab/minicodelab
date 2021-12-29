import { Client } from '@notionhq/client';

const Post = ({ post }) => {
    return <pre>{JSON.stringify(post, null, 2)}</pre>
};

export const getStaticPaths = async () => {
    const notion = new Client({
        auth: process.env.NEXT_PUBLIC_NOTION_SECRET,
    });

    const data = await notion.blocks.children.list({
        block_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_POST_ID
    });
    const paths = [];
    data.results.forEach(result => {
        if (result.type === 'child_page') {
            paths.push({
                params: {
                    id: result.id,
                },
            })
        }
    });
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async ({ params: { id } }) => {
    const notion = new Client({
        auth: process.env.NEXT_PUBLIC_NOTION_SECRET,
    });

    const page = await notion.pages.retrieve({
        page_id: id
    });
    return {
        props: {
            post: page
        },
    }
}

export default Post;
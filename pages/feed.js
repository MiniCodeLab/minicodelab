import Head from 'next/head';
import Link from 'next/link';
import { Client } from '@notionhq/client';

import { UiMenu } from '../styles/uiComponents/UiMenu';
import Menu from '../components/Menu';


export const getStaticProps = async () => {
    const notion = new Client({
        auth: process.env.NEXT_PUBLIC_NOTION_SECRET,
    });
    const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;

    const data = await notion.databases.query({
        database_id: databaseId,
    })
    console.log(JSON.stringify(data));
    const posts = [];
    data.results.forEach((results) => {
        if (results.type === "child_page") {
            posts.push({ id: results.id, title: results.child_page.title })
        }
    })
    return {
        props: {
            posts,
        }
    }
}

export default function Feed({ posts }) {
    return (
        <div>
            <Head>
                <title>Mini Code Lab {'/>'} Feed</title>
                <link rel="icon" href="/flask.png" />
            </Head>
            <UiMenu>
                <Menu />
            </UiMenu>
            {posts.map(post => (
                <h1 key={post.id}>
                    <Link href={`/feed/${post.id}`}>
                        <a>{post.title}</a>
                    </Link>
                </h1>
            ))}

        </div>
    )
}

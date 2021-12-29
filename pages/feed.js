import Head from 'next/head'
import { UiMenu } from '../styles/uiComponents/UiMenu';
import Menu from '../components/Menu';

export default function Feed() {
    return (
        <div>
            <Head>
                <title>Mini Code Lab {'/>'} Feed</title>
                <link rel="icon" href="/flask.png" />
            </Head>
            <UiMenu>
                <Menu />
            </UiMenu>
            <h1>Feed</h1>
        </div>
    )
}

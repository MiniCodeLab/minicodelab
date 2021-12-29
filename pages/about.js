import Head from 'next/head'
import { UiMenu } from '../styles/uiComponents/UiMenu';
import Menu from '../components/Menu';

export default function About() {
    return (
        <div>
            <Head>
                <title>Mini Code Lab {'/>'} About</title>
                <link rel="icon" href="/flask.png" />
            </Head>
            <UiMenu>
                <Menu />
            </UiMenu>
            <h1>About</h1>
        </div>
    )
}

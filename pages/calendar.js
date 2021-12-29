import Head from 'next/head'
import { UiMenu } from '../styles/uiComponents/UiMenu';
import Menu from '../components/Menu';

export default function Calendar() {
    return (
        <div>
            <Head>
                <title>Mini Code Lab {'/>'} Calendar</title>
                <link rel="icon" href="/flask.png" />
            </Head>
            <UiMenu>
                <Menu />
            </UiMenu>
            <h1>Calendar</h1>
        </div>
    )
}
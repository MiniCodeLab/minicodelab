import Head from 'next/head'
import { UiMenu } from '../styles/uiComponents/UiMenu';
import Menu from '../components/Menu';

export default function About() {
    return (
        <div>
            <Head>
                <title>Mini Code Lab {'/>'}</title>
                <link rel="icon" href="/icon-flask.png" />
            </Head>
            <UiMenu>
                <Menu />
            </UiMenu>
        </div>
    )
}

import Head from 'next/head'
import Image from 'next/image';
import { Card } from '../styles/uiComponents/Card';
import { Button } from '../styles/uiComponents/Button';
import { UiMenu } from '../styles/uiComponents/UiMenu';
import Menu from '../components/Menu';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mini Code Lab {'/>'}</title>
        <link rel="icon" href="/icon-flask.png" />
      </Head>
      <UiMenu>
        <Menu />
      </UiMenu>
      <Card>
        <div className="card-header">
          <Image src="/icon-flask.png" alt="Flask" width={100} height={100} />
          <h1>Hola somos Mini Code Lab</h1>
          <Button>Click Me!</Button>
        </div>
        <p className="card-copy">Estamos para ayudarte en tu aprendizaje como developer</p>
      </Card>
    </div>
  )
}

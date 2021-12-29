import Head from "next/head";
import Image from "next/image";
import { Card } from "../styles/uiComponents/Card";
import { Button } from "../styles/uiComponents/Button";
import { UiMenu } from "../styles/uiComponents/UiMenu";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mini Code Lab {"/>"}</title>
        <link rel="icon" href="/flask.png" />
      </Head>
      <UiMenu>
        <Menu />
      </UiMenu>
      <Card>
        <div className="card-header">
          <div className="card-image-container">
            <Image
              src="/logoletras.png"
              alt="Mini Code Lab logo"
              layout="fill"
              className="card-image"
            />
          </div>
          <h1>Hola somos Mini Code Lab</h1>
        </div>
        <p className="card-copy">
          Estamos para ayudarte en tu aprendizaje como developer
        </p>
        <Button>Click Me!</Button>
      </Card>
      <Card>
        <div className="card-header">
          <div className="card-image-container">
            <Image
              src="/js.png"
              alt="JavaScript logo"
              layout="fill"
              className="card-image"
            />
          </div>
          <h1>Javascript</h1>
        </div>
        <p className="card-copy">Primer artículo sobre JavaScript</p>
        <Button>Leer más...</Button>
      </Card>
      <Card>
        <div className="card-header">
          <div className="card-image-container">
            <Image
              src="/html.png"
              alt="HTML logo"
              layout="fill"
              className="card-image"
            />
          </div>
          <h1>HTML</h1>
        </div>
        <p className="card-copy">Primer artículo sobre HTML</p>
        <Button>Leer más...</Button>
      </Card>
      <Card>
        <div className="card-header">
          <div className="card-image-container">
            <Image
              src="/css.png"
              alt="CSS logo"
              layout="fill"
              className="card-image"
            />
          </div>
          <h1>CSS</h1>
        </div>
        <p className="card-copy">Primer artículo sobre CSS</p>
        <Button>Leer más...</Button>
      </Card>
      <Card>
        <div className="card-header">
          <div className="card-image-container">
            <Image
              src="/query.png"
              alt="Query logo"
              layout="fill"
              className="card-image"
            />
          </div>
          <h1>Medias Queries</h1>
        </div>
        <p className="card-copy">Primer artículo sobre Medias Queries</p>
        <Button>Leer más...</Button>
      </Card>
    </div>
  );
}

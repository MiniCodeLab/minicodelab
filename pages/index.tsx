import Head from 'next/head';
import Image from 'next/image';

import Menu from 'components/Menu';
import { Card } from 'styles/uiComponents/Card';
import { Button } from 'styles/uiComponents/Button';
import { UiMenu } from 'styles/uiComponents/UiMenu';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Mini Code Lab {'/>'}</title>
        <link rel="icon" href="/flask.png" />
      </Head>

      <UiMenu>
        <Menu />
      </UiMenu>
      <h1>Home</h1>
    </div>
  );
};

export default Home;

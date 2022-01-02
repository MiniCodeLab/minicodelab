import Head from 'next/head';
import Image from 'next/image';

import Menu from 'components/Menu';
import { UiContentPage } from 'styles/uiComponents/UiContentPage';
import { UiMenu } from 'styles/uiComponents/UiMenu';

const Home: React.FC = () => {
  return (
    <UiContentPage>
      <Head>
        <title>Mini Code Lab {'/>'}</title>
        <link rel="icon" href="/flask.png" />
      </Head>

      <UiMenu>
        <Menu />
      </UiMenu>
      <h1>Home</h1>
    </UiContentPage>
  );
};

export default Home;

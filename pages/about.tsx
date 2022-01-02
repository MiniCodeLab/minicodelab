import Head from 'next/head';

import Menu from 'components/Menu';
import { UiContentPage } from 'styles/uiComponents/UiContentPage';
import { UiMenu } from 'styles/uiComponents/UiMenu';

const About: React.FC = () => {
  return (
    <UiContentPage>
      <Head>
        <title>Mini Code Lab {'/>'} About</title>
        <link rel="icon" href="/flask.png" />
      </Head>
      <UiMenu>
        <Menu />
      </UiMenu>
      <h1>About</h1>
    </UiContentPage>
  );
};

export default About;

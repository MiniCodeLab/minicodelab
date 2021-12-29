import Head from 'next/head';

import Menu from 'components/Menu';
import { UiMenu } from 'styles/uiComponents/UiMenu';

const About: React.FC = () => {
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
  );
};

export default About;

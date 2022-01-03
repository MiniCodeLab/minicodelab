import Head from 'next/head';

import Menu from 'components/Menu';
import { UImenu } from 'styles/uiComponents/UImenu';

const About: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Mini Code Lab {'/>'} About</title>
        <link rel="icon" href="/flask.png" />
      </Head>
      <UImenu>
        <Menu />
      </UImenu>
      <h1>About</h1>
    </div>
  );
};

export default About;

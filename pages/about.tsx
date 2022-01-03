import Head from 'next/head';

import Menu from 'components/Menu';

import AboutCard from 'components/AboutCard';
import { UImenu } from 'styles/uiComponents/UImenu';
import { UIlist } from 'styles/uiComponents/UIlist';

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
      <UIlist>
        <AboutCard />
        <AboutCard />
        <AboutCard />
        <AboutCard />
      </UIlist>
    </div>
  );
};

export default About;

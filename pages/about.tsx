import Head from 'next/head';

import Menu from 'components/Menu';
import Footer from 'components/Footer';

import AboutCard from 'components/AboutCard';
import { UImenu } from 'styles/uiComponents/UImenu';
import { UIlist } from 'styles/uiComponents/UIlist';
import { Fade } from 'react-awesome-reveal';
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
      <Fade cascade duration={1500}>
        <UIlist>
          <AboutCard />
          <AboutCard />
          <AboutCard />
          <AboutCard />
        </UIlist>
      </Fade>
      <Footer />
    </div>
  );
};

export default About;

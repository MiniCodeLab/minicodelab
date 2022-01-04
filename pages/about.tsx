import Head from 'next/head';

import Menu from 'components/Menu';
import Footer from 'components/Footer';

import AboutCard from 'components/AboutCard';

import { Menu as Nav } from 'styles/uiComponents/Menu';
import { List } from 'styles/uiComponents/List';

const About: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Mini Code Lab {'/>'} About</title>
        <link rel="icon" href="/images/flask.png" />
      </Head>
      <Nav>
        <Menu />
      </Nav>
      <List>
        <AboutCard />
      </List>
      <Footer />
    </div>
  );
};

export default About;

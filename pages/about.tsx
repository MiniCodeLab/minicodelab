import AboutCard from 'components/AboutCard';
import Layout from 'components/Layout';
import { GetStaticPropsResult } from 'next';
import { CardsWrapper } from 'styles/ui/Card';
import { ContactInfo } from 'styles/ui/ContactInfo';
import { Profile } from 'types/common';

const AboutPage: React.FC<Props> = ({ profiles }) => {
  return (
    <Layout title="About">
      <CardsWrapper>
        <AboutCard profiles={profiles} />
      </CardsWrapper>
      <ContactInfo>
        <h2>¿Quieres formación personalizada?</h2>
        <h3>minicodelab@gmail.com</h3>
      </ContactInfo>
    </Layout>
  );
};

export type Props = {
  profiles: Profile[];
};

export const getStaticProps = async (): Promise<GetStaticPropsResult<Props>> => {
  const profiles: Props['profiles'] = await (
    await fetch(`${process.env.NEXT_PUBLIC_CONTENT_URL}about.json`)
  ).json();

  return {
    props: {
      profiles
    },
    revalidate: 60 * 60 * 24
  };
};

export default AboutPage;

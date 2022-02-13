import AboutCard from 'components/AboutCard';
import Layout from 'components/Layout';
import { GetStaticPropsResult } from 'next';
import { CardsWrapper } from 'styles/ui/Card';
import { Profile } from 'types/common';
import Link from 'next/link';
import styled from '@emotion/styled';

const AboutHeader = styled.div`
  padding: 0 var(--spacing-m);

  h1,
  h2,
  p {
    padding-bottom: var(--spacing-m);
  }

  h2 {
    padding-top: var(--spacing-m);
  }
`;

const AboutPage: React.FC<Props> = ({ profiles }) => {
  return (
    <Layout title="About">
      <AboutHeader>
        <h1>Somos MiniCodeLab</h1>

        <p>
          Hola 👋! Somos MiniCodeLab, punto de encuentro para desarrolladores. Hemos creado Mini
          Code como plataforma de colaboración entre desarrolladores, desde los que estáis dando los
          primeros pasos hasta los que habéis vivido la evolución del desarrollo web.
        </p>

        <p>
          Quieres conocernos? Pues te damos las respuestas a las preguntas que nos hicimos en su día
          en nuestro{' '}
          <Link href="/feed/somos-mini-code">
            <a>Primer Post</a>
          </Link>
        </p>
      </AboutHeader>

      <AboutHeader>
        <h2>Quiénes estamos colaborando en MiniCodeLab</h2>

        <p>
          Somos un grupo de desarrolladores con muchas ganas de devolver a la comunidad todo lo que
          han recibido. Cristian es nuestro “Gurú” <span role="img">🙌🏽</span>, un auténtico crack
          con conocimientos ilimitados, Antonio es nuestro “Pulmón” <span role="img">🦦</span>,
          prueba todo y aprende de todo, Álvaro es “KeyMan” <span role="img">🔑</span>, está dando
          sus primeros pasos pero su dominio en el resto de ámbitos le hacen pieza clave en Mini
          Code, y Alberto es “SushiMan” <span role="img">🍱</span>, que ha unido a estos cracks para
          dar vida a Mini Code.
        </p>
      </AboutHeader>

      <CardsWrapper>
        <AboutCard profiles={profiles} />
      </CardsWrapper>
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

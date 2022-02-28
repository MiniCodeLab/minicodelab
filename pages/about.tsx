import styled from '@emotion/styled';
import Layout from 'components/Layout';
import Image from 'next/image';
import { tabletUp } from 'styles/global';
import { getMetaData } from 'utils/common';

const ImageContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: var(--spacing-m);
`;

const BigLink = styled.a`
  display: block;
  font-size: calc(1.2 * var(--paragraph));
  font-weight: bold;
  text-align: center;

  ${tabletUp} {
    font-size: calc(var(--paragraph) * 1.5);
  }
`;

const AboutPage = () => {
  return (
    <Layout
      title="¿Quiénes somos?"
      headChildren={getMetaData({
        title: '¿Quiénes somos?',
        description: '¿Qué es MiniCodeLab y quienes lo forman?'
      })}
    >
      <section>
        <h1>Somos MiniCodeLab</h1>

        <p>
          ¡Hola 👋! Somos <b>MiniCodeLab</b>, punto de encuentro para desarrolladores. Hemos creado
          todo esto como plataforma de colaboración entre desarrolladores, desde aquellas personas
          que estáis dando vuestros primeros pasos en el mundo del desarrollo hasta aquellas que
          habéis vivido la evolución del desarrollo web y tenéis experiencia en la mochila.
        </p>

        <ImageContainer>
          <Image
            src="https://res.cloudinary.com/db38x6luj/image/upload/c_scale,w_600/v1642115271/articles/long-logo.png"
            alt="mini code logo"
            width={600}
            height={99}
          />
        </ImageContainer>
      </section>

      <section>
        <h2>¿Quiénes colaboramos en MiniCodeLab?</h2>

        <p>
          Somos un grupo de desarrolladores con muchas ganas de devolver a la comunidad todo lo que
          han recibido 😍. La idea detrás de esta comunidad es que la cantidad de developers que
          colaboren no sea estática, y que cualquier persona dedicada al desarrollo pueda
          participar. Con esto te queremos decir que seremos un grupo diverso y dinámico al largo
          plazo, donde cualquier persona que desee participar aportando nuevo contenido sea libre de
          hacerlo. Siempre con el conocimiento y el acuerdo de las personas que conformen la
          comunidad previamente para que se nos vaya de las manos la cosa 🤯.
        </p>
        <p>
          De este modo, siempre tendremos la seguridad de que vamos a darte el mejor contenido libre
          sobre programación que podamos, y apoyaremos a quien quiera darse a conocer en estos
          mundos. Sabemos que es difícil encontrar mentores que puedan ayudarnos a crecer, y
          pensamos que <b>MiniCodeLab</b> puede ser el punto intermedio en el que podamos apoyarnos
          entre toda la comunidad que formemos para crecer de la mano.
        </p>
      </section>

      <section>
        <h2>¿Dónde puedes conocernos?</h2>

        <p>
          Estamos en las redes que nos parecen más interesantes para el desarrollo. Pero
          principalmente podrás encontrarnos en Twitch haciendo streams en los que veremos{' '}
          <b>Talleres sobre Tecnologías</b>, <b>Code Talks</b> donde invitaremos a perfiles variados
          y sesiones varias de <b>Free Coding</b> donde programaremos de todo 💻.
        </p>

        <BigLink href="https://www.twitch.tv/minicodelab" target="_blank" rel="noopener noreferrer">
          Pásate por el directo y contáctanos 😎
        </BigLink>
      </section>
    </Layout>
  );
};

export default AboutPage;

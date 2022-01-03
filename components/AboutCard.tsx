import Image from 'next/image';

import { LayoutCard } from '../styles/uiComponents/layoutCard';

const AboutCard: React.FC = () => {
  return (
    <LayoutCard>
      <div className="about-card-header">
        <h1>Cristian Castillo</h1>
        <h2>Technical Lead of Mini code lab</h2>
        <h2>Senior FullStack Developer at Olympic Channel</h2>
      </div>
      <div className="about-card-body">
        <Image src="/cristian.png" alt="photo cristian" width={490} height={490} />
        <p>
          Desde que conocí a Cristian supe que sería un crack dentro de este mundillo 💻 y en pocos
          meses se confirmaba lo que todos sabíamos, es un tipo con una capacidad técnica
          sorprendente. Ha conseguido metas que muchos desarrolladores no han llegado alcanzar en
          toda su carrera y lo mejor es que no tiene límites 🚀. Además de todo esto es un gran
          compañero y amigo 🤟, siempre dispuesto a colaborar, y un gran formador porque trasmite
          con simpatía y simplicidad conceptos complejos... Pero que os voy a decir si es parte de
          esa familia que encontramos en la vida 💕
        </p>
      </div>
      <ul className="about-card-footer">
        <li>
          <Image src="/github.png" alt="Github icon" width={25} height={25} />
        </li>
        <li>
          <Image src="/linkedin.png" alt="Linkedin icon" width={25} height={25} />
        </li>
        <li>
          <Image src="/instagram.png" alt="Instagram icon" width={25} height={25} />
        </li>
        <li>
          <Image src="/twitter.png" alt="Twitter icon" width={25} height={25} />
        </li>
      </ul>
    </LayoutCard>
  );
};

export default AboutCard;

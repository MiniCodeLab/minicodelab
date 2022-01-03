import Link from 'next/link';
import Image from 'next/image';

import { UIaboutCard } from '../styles/uiComponents/UIaboutCard';
import { Fade } from 'react-awesome-reveal';

const AboutCard: React.FC = () => {
  return (
    <UIaboutCard>
      <Fade cascade triggerOnce>
        <div className="about-card-header">
          <h1>Cristian Castillo</h1>
          <h2>Technical Lead of Mini code lab</h2>
          <h2>Senior FullStack Developer at Olympic Channel</h2>
        </div>
        <div className="about-card-body">
          <Image src="/alvaro.png" alt="photo cristian" width={490} height={490} />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, dolorum esse rerum
            aliquam provident a deserunt corrupti enim voluptatem ullam soluta magnam adipisci hic
            quibusdam saepe eius aut numquam dolores!Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Reiciendis, dolorum esse rerum aliquam provident a deserunt corrupti
            enim voluptatem ullam soluta magnam adipisci hic quibusdam saepe eius aut numquam
            dolores!
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
      </Fade>
    </UIaboutCard>
  );
};

export default AboutCard;
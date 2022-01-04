import Image from 'next/image';

import { LayoutCard } from 'styles/uiComponents/LayoutCard';
import github from 'public/images/github.png';
import linkedin from 'public/images/linkedin.png';
import instagram from 'public/images/instagram.png';
import twitter from 'public/images/twitter.png';
import aboutData from 'about.json';

const { about } = aboutData;

const AboutCard: React.FC = () => {
  return (
    <>
      {about.map((member) => {
        return (
          <LayoutCard key={member.name}>
            <div className="about-card-header">
              <h1>{member.name}</h1>
              <h2>{member.position}</h2>
            </div>

            <div className="about-card-body">
              <Image src={member.photo} alt={member.name} width={490} height={490} />
              <p>{member.description}</p>
            </div>
            <ul className="about-card-footer">
              {member.github ? (
                <li>
                  <a href={member.github}>
                    <Image src={github} alt="Github icon" width={40} height={40} />
                  </a>
                </li>
              ) : null}
              {member.linkedin ? (
                <li>
                  <a href={member.linkedin}>
                    <Image src={linkedin} alt="Linkedin icon" width={40} height={40} />
                  </a>
                </li>
              ) : null}
              {member.instagram ? (
                <li>
                  <a href={member.instagram}>
                    <Image src={instagram} alt="Instagram icon" width={40} height={40} />
                  </a>
                </li>
              ) : null}
              {member.twitter ? (
                <li>
                  <a href={member.twitter}>
                    <Image src={twitter} alt="Twitter icon" width={40} height={40} />
                  </a>
                </li>
              ) : null}
            </ul>
          </LayoutCard>
        );
      })}
    </>
  );
};

export default AboutCard;

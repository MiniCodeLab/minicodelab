import Image from 'next/image';

import { LayoutCard } from '../styles/uiComponents/LayoutCard';

import { about } from '../about.json';

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
                    <Image src="/github.png" alt="Github icon" width={25} height={25} />
                  </a>
                </li>
              ) : null}
              {member.linkedin ? (
                <li>
                  <a href={member.linkedin}>
                    <Image src="/linkedin.png" alt="Linkedin icon" width={25} height={25} />
                  </a>
                </li>
              ) : null}
              {member.instagram ? (
                <li>
                  <a href={member.instagram}>
                    <Image src="/instagram.png" alt="Instagram icon" width={25} height={25} />
                  </a>
                </li>
              ) : null}
              {member.twitter ? (
                <li>
                  <a href={member.twitter}>
                    <Image src="/twitter.png" alt="Twitter icon" width={25} height={25} />
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

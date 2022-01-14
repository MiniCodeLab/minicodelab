import Image from 'next/image';
import github from 'public/images/github.png';
import instagram from 'public/images/instagram.png';
import linkedin from 'public/images/linkedin.png';
import twitter from 'public/images/twitter.png';
import { Card, CardHeader, CardMediaContent, CardNetworks } from 'styles/ui/Card';
import { Profile } from 'types/common';

const AboutCard: React.FC<Props> = ({ profiles }) => {
  return (
    <>
      {profiles.map((member) => {
        return (
          <Card key={member.name}>
            <CardHeader className="about-card-header">
              <h2>{member.name}</h2>
              <h3>{member.position}</h3>
            </CardHeader>

            <CardMediaContent>
              <div>
                <Image src={member.photo} alt={member.name} width={300} height={300} />
              </div>

              <CardNetworks>
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
              </CardNetworks>
            </CardMediaContent>
          </Card>
        );
      })}
    </>
  );
};

export type Props = {
  profiles: Profile[];
};

export default AboutCard;

import Image from 'next/image';
import github from 'public/images/github.png';
import instagram from 'public/images/instagram.png';
import linkedin from 'public/images/linkedin.png';
import twitch from 'public/images/twitch.png';
import twitter from 'public/images/twitter.png';
import youtube from 'public/images/youtube.png';
import { Footer as FooterUi } from 'styles/ui/Footer';

export const socialLogos = [
  { link: 'https://github.com/MiniCodeLab', src: github, alt: 'logo github' },
  { link: 'https://www.instagram.com/minicodelab/', src: instagram, alt: 'logo instagram' },
  { link: 'https://www.linkedin.com/in/minicodelab/', src: linkedin, alt: 'logo linkedin' },
  { link: 'https://www.twitch.tv/minicodelab', src: twitch, alt: 'logo twitch' },
  { link: 'https://twitter.com/minicodelab/', src: twitter, alt: 'logo twitter' },
  {
    link: 'https://www.youtube.com/channel/UCN1SyK4zRHbdIO6HptDoDOA',
    src: youtube,
    alt: 'logo youtube'
  }
];

const Footer: React.FC = () => {
  return (
    <FooterUi>
      <ul>
        {socialLogos.map((logo, idx) => (
          <li key={idx}>
            <a href={logo.link}>
              <Image src={logo.src} alt={logo.alt} width={40} height={40} />
            </a>
          </li>
        ))}
      </ul>
      <p>
        Creado con amor por Mini Code Lab <span role="img">❤️</span>
      </p>
    </FooterUi>
  );
};

export default Footer;

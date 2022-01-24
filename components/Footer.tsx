import Image from 'next/image';
import github from 'public/images/github.png';
import instagram from 'public/images/instagram.png';
import linkedin from 'public/images/linkedin.png';
import tiktok from 'public/images/tik-tok.png';
import twitch from 'public/images/twitch.png';
import twitter from 'public/images/twitter.png';
import youtube from 'public/images/youtube.png';
import { Footer as FooterUi } from 'styles/ui/Footer';

const Footer: React.FC = () => {
  return (
    <FooterUi>
      <ul>
        <li>
          <a href="https://github.com/MiniCodeLab">
            <Image src={github} alt="logo github" width={40} height={40} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/minicodelab/">
            <Image src={linkedin} alt="logo linkedin" width={40} height={40} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/minicodelab/">
            <Image src={instagram} alt="logo instagram" width={40} height={40} />
          </a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@minicodelab">
            <Image src={tiktok} alt="logo tik-tok" width={40} height={40} />
          </a>
        </li>
        <li>
          <a href="https://www.twitch.tv/minicodelab">
            <Image src={twitch} alt="logo twitch" width={40} height={40} />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCN1SyK4zRHbdIO6HptDoDOA">
            <Image src={youtube} alt="logo youtube" width={40} height={40} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/minicodelab/">
            <Image src={twitter} alt="logo twitter" width={40} height={40} />
          </a>
        </li>
      </ul>

      <p>
        Creado con amor por Mini Code Lab <span role="img">❤️</span>
      </p>
    </FooterUi>
  );
};

export default Footer;

import Image from 'next/image';

import { Footer as FooterUi } from 'styles/uiComponents/Footer';
import github from 'public/images/github.png';
import linkedin from 'public/images/linkedin.png';
import instagram from 'public/images/instagram.png';
import tiktok from 'public/images/tik-tok.png';
import twitch from 'public/images/twitch.png';
import youtube from 'public/images/youtube.png';
import twitter from 'public/images/twitter.png';

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
          <a href="https://www.linkedin.com/in/mini-code-lab-studio-285595229/">
            <Image src={linkedin} alt="logo linkedin" width={40} height={40} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/minicodelab/">
            <Image src={instagram} alt="logo instagram" width={40} height={40} />
          </a>
        </li>
        <li>
          <a href="">
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
    </FooterUi>
  );
};

export default Footer;

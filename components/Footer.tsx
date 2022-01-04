import Image from 'next/image';

import { Footer as FooterUi } from '../styles/uiComponents/Footer';

const Footer: React.FC = () => {
  return (
    <FooterUi>
      <ul>
        <li>
          <a href="https://github.com/MiniCodeLab">
            <Image src="/github.png" alt="logo github" width={30} height={30} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mini-code-lab-studio-285595229/">
            <Image src="/linkedin.png" alt="logo linkedin" width={30} height={30} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/minicodelab/">
            <Image src="/instagram.png" alt="logo instagram" width={30} height={30} />
          </a>
        </li>
        <li>
          <a href="">
            <Image src="/tik-tok.png" alt="logo tik-tok" width={30} height={30} />
          </a>
        </li>
        <li>
          <a href="https://www.twitch.tv/minicodelab">
            <Image src="/twitch.png" alt="logo twitch" width={30} height={30} />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCN1SyK4zRHbdIO6HptDoDOA">
            <Image src="/youtube.png" alt="logo youtube" width={30} height={30} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/minicodelab/">
            <Image src="/twitter.png" alt="logo twitter" width={30} height={30} />
          </a>
        </li>
      </ul>
    </FooterUi>
  );
};

export default Footer;

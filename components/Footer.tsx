import Image from 'next/image';

import { Footer as FooterUi } from '../styles/uiComponents/Footer';

const Footer: React.FC = () => {
  return (
    <FooterUi>
      <ul>
        <li>
          <Image src="/github.png" alt="logo twitter" width={30} height={30} />
        </li>
        <li>
          <Image src="/instagram.png" alt="logo instagram" width={30} height={30} />
        </li>
        <li>
          <Image src="/tik-tok.png" alt="logo tik-tok" width={30} height={30} />
        </li>
        <li>
          <Image src="/twitch.png" alt="logo twitch" width={30} height={30} />
        </li>
        <li>
          <Image src="/youtube.png" alt="logo youtube" width={30} height={30} />
        </li>
        <li>
          <Image src="/facebook.png" alt="logo facebook" width={30} height={30} />
        </li>
        <li>
          <Image src="/twitter.png" alt="logo twitter" width={30} height={30} />
        </li>
      </ul>
    </FooterUi>
  );
};

export default Footer;

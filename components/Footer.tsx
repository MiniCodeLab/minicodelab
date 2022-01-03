import Image from 'next/image';

import { UIfooter } from '../styles/uiComponents/UIfooter';

const Footer: React.FC = () => {
  return (
    <UIfooter>
      <ul>
        <li>
          <Image src="/github.png" alt="logo twitter" width={25} height={25} />
        </li>
        <li>
          <Image src="/instagram.png" alt="logo instagram" width={25} height={25} />
        </li>
        <li>
          <Image src="/tik-tok.png" alt="logo tik-tok" width={25} height={25} />
        </li>
        <li>
          <Image src="/twitch.png" alt="logo twitch" width={25} height={25} />
        </li>
        <li>
          <Image src="/youtube.png" alt="logo youtube" width={25} height={25} />
        </li>
        <li>
          <Image src="/facebook.png" alt="logo facebook" width={25} height={25} />
        </li>
        <li>
          <Image src="/twitter.png" alt="logo twitter" width={25} height={25} />
        </li>
      </ul>
    </UIfooter>
  );
};

export default Footer;

import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { AttentionSeeker, Fade } from 'react-awesome-reveal';

const ColorMode = dynamic(() => import('./ColorMode'), {
  ssr: false
});

const Menu: React.FC = () => {
  return (
    <ul>
      <AttentionSeeker effect="tada">
        <li className="logo">
          <Link href="/" passHref>
            <a>
              <Image src="/longlogo.png" alt="logo icon" width={151} height={25} />
            </a>
          </Link>
        </li>
      </AttentionSeeker>
      <Fade cascade triggerOnce duration={800}>
        <li>
          <Link href="/calendar" passHref>
            <a className="other">
              <Image src="/calendar.png" alt="Calendar icon" width={25} height={25} />
            </a>
          </Link>
          <Link href="/about" passHref>
            <a className="other">
              <Image src="/about.png" alt="About icon" width={25} height={25} />
            </a>
          </Link>
          <ColorMode />
        </li>
      </Fade>
    </ul>
  );
};

export default Menu;

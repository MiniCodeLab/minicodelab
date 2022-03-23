import Image from 'next/image';
import Link from 'next/link';
import about from 'public/images/about.png';
import youtube from 'public/images/youtube.png';
import longLogo from 'public/images/longlogo.png';
import ColorMode from './ColorMode';

const Menu: React.FC = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/" passHref>
          <a title="Home">
            <Image alt="logo icon" height={33} priority src={longLogo} width={200} />
          </a>
        </Link>
      </div>

      <ul>
        <li>
          <Link href="/videos" passHref>
            <a title="Videos">
              <Image src={youtube} alt="youtube icon" width={40} height={40} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about" passHref>
            <a title="Sobre MiniCodeLab">
              <Image src={about} alt="About icon" width={40} height={40} />
            </a>
          </Link>
        </li>
        <li>
          <ColorMode />
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

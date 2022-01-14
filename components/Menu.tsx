import Image from 'next/image';
import Link from 'next/link';
import about from 'public/images/about.png';
import calendar from 'public/images/calendar.png';
import longLogo from 'public/images/longlogo.png';
import ColorMode from './ColorMode';

const Menu: React.FC = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/" passHref>
          <a>
            <Image
              alt="logo icon"
              height={33}
              placeholder="blur"
              priority
              src={longLogo}
              width={200}
            />
          </a>
        </Link>
      </div>

      <ul>
        <li>
          <Link href="/calendar" passHref>
            <a>
              <Image src={calendar} alt="Calendar icon" width={40} height={40} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about" passHref>
            <a>
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

import Link from 'next/link';
import Image from 'next/image';

import ColorMode from './ColorMode';
import longLogo from 'public/images/longlogo.png';
import calendar from 'public/images/calendar.png';
import about from 'public/images/about.png';

const Menu: React.FC = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/" passHref>
          <a>
            <Image
              alt="logo icon"
              height={25}
              placeholder="blur"
              priority
              src={longLogo}
              width={151}
            />
          </a>
        </Link>
      </div>
      <ul>
        <li>
          <Link href="/calendar" passHref>
            <a>
              <Image src={calendar} alt="Calendar icon" width={25} height={25} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about" passHref>
            <a>
              <Image src={about} alt="About icon" width={25} height={25} />
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

import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const ColorMode = dynamic(() => import('./ColorMode'), {
  ssr: false
});

const Menu: React.FC = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/" passHref>
          <a>
            <Image src="/longlogo.png" alt="logo icon" width={151} height={25} priority />
          </a>
        </Link>
      </div>
      <ul>
        <li>
          <Link href="/calendar" passHref>
            <a>
              <Image src="/calendar.png" alt="Calendar icon" width={25} height={25} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about" passHref>
            <a>
              <Image src="/about.png" alt="About icon" width={25} height={25} />
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

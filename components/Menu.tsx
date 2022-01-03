import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const ColorMode = dynamic(() => import('./ColorMode'), {
  ssr: false
});

const Menu: React.FC = () => {
  return (
    <ul>
      <li>
        <Link href="/" passHref>
          <a>
            <Image src="/longlogo.png" alt="logo icon" width={151} height={25} />
          </a>
        </Link>
      </li>
      <li>
        <Link href="/calendar" passHref>
          <a className="other">
            <Image src="/calendar.png" alt="Calendar icon" width={25} height={25} />
          </a>
        </Link>
        <ColorMode />
      </li>
    </ul>
  );
};

export default Menu;

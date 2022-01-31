import { useTheme } from 'next-themes';
import Image from 'next/image';
import colormode from 'public/images/colormode.png';
import { useEffect, useState } from 'react';

const ColorMode: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const altTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Image
      alt="ColorMode"
      aria-label={`Cambiar a modo ${altTheme}`}
      height={40}
      onClick={() => setTheme(altTheme)}
      src={colormode}
      title={`Cambiar a modo ${altTheme}`}
      width={40}
    />
  );
};

export default ColorMode;

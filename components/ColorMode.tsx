import { useState, useEffect } from 'react';
import Image from 'next/image';

const ColorMode: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<string>(document.body.dataset.theme);
  const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light';

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem('theme', activeTheme);
  }, [activeTheme]);

  return (
    <Image
      alt="ColorMode"
      aria-label={`Change to ${inactiveTheme} mode`}
      width={25}
      height={25}
      onClick={() => setActiveTheme(inactiveTheme)}
      src="/colormode.png"
      title={`Change to ${inactiveTheme} mode`}
    />
  );
};

export default ColorMode;

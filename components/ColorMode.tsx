import Image from 'next/image';
import useDarkMode from 'use-dark-mode';

import colormode from 'public/images/colormode.png';

const ColorMode: React.FC = () => {
  const darkMode = useDarkMode(false);
  const altTheme = darkMode ? 'light' : 'dark';

  return (
    <Image
      alt="ColorMode"
      aria-label={`Change to ${altTheme} mode`}
      height={40}
      onClick={darkMode.toggle}
      src={colormode}
      title={`Change to ${altTheme} mode`}
      width={40}
    />
  );
};

export default ColorMode;

import { useState, useEffect } from "react";
import Image from 'next/image';

const ColorMode = () => {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);
  return (
    <div className="colormode-icon-container">
    <Image aria-label={`Change to ${inactiveTheme} mode`}
      title={`Change to ${inactiveTheme} mode`}
      type="button"
      onClick={() => setActiveTheme(inactiveTheme)} src="/colormode.png" alt="ColorMode" layout="fill" className="colormode-icon" />
      </div>
  );
};

export default ColorMode;
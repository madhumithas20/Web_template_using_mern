import { useState } from "react";
import { MdBrightness2 } from "react-icons/md";
import { IoMdPartlySunny } from "react-icons/io";
import "./ThemeChange.css";
export default function ThemeChange() {
  const [themeLight, setTheme] = useState(true);
  function handleThemeChange() {
    const root = document.documentElement;
    if (themeLight) {
      root.style.setProperty("--theme-secondary", "#232B2B");
      root.style.setProperty("--color-primary", "white");
      setTheme(false);
    } else {
      setTheme(true);
      root.style.setProperty("--theme-secondary", "white");
      root.style.setProperty("--color-primary", "black");
    }
  }
  return (
    <div className="themeChange-cont">
      <button onClick={handleThemeChange} className="themeChange-btn">
        {themeLight ? <IoMdPartlySunny /> : <MdBrightness2 />}
        <span className="themeChange-btn-text">
          {themeLight ? "Light" : "Dark"}
        </span>
      </button>
    </div>
  );
}

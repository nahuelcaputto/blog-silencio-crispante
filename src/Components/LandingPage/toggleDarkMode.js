import React, { useEffect, useState } from "react";

const ToggleDarkMode = ({ currentTheme, setCurrentTheme }) => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    console.log(currentTheme);
    if (currentTheme === "dark") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, [currentTheme]);

  const changeTheme = () => {
    if (currentTheme === "dark") {
      localStorage.setItem("theme", "light");
      setCurrentTheme("light");
    } else {
      localStorage.setItem("theme", "dark");
      setCurrentTheme("dark");
    }
  };

  return (
    <div className="d-flex align-items-center">
      <span className="text-pink">Dark Mode</span>
      <label className="switch">
        <input type="checkbox" value={darkMode} onClick={changeTheme} />
        <span className="slider round w-100" />
      </label>
    </div>
  );
};
export default ToggleDarkMode;

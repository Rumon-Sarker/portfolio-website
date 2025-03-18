import { useContext } from "react";


import { ThemeContext } from "../hoc/ThemeContext";

import { FaMoon } from "react-icons/fa";


const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
    >
      {theme === "dark" ? <FaMoon  className="text-yellow-500" /> : <FaMoon  className="text-gray-900" />}
    </button>
  );
};

export default ThemeToggle;

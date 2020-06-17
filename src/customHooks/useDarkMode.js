import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (key) => {
  const [darkMode, setDarkMode] = useLocalStorage("dark-theme");

  useEffect(() => {
    if (darkMode) document.body.classList.add("dark-mode");
    else document.body.classList.remove("dark-mode");
  });
  return [darkMode, setDarkMode];
};

export default useDarkMode;

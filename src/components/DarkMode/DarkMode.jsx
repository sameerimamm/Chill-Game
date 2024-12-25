import React, { useState, useEffect } from "react";
import "./DarkMode.css";
import Moon from "./Moon.svg";
import Sun from "./Sun.svg";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("selectedTheme");
    return storedTheme === "dark"; // Initial state based on localStorage
  });

  // Update localStorage and toggle theme on state change
  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("selectedTheme", theme);
  }, [isDarkMode]);

  const toggleChange = () => {
    setIsDarkMode(!isDarkMode); // Toggle state
  };

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleChange}
        checked={isDarkMode} // Controlled checkbox based on state
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
import React, { useState, useEffect } from 'react';
//import './ThemeToggleButton.css'; // Import the CSS file for styling

const ThemeToggleButton = ({ onToggle }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    onToggle(isDarkMode);
  }, [isDarkMode, onToggle]);

  const handleToggle = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  return (
    <div className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`} onClick={handleToggle}>
      <div className="toggle-slider" />
    </div>
  );
};

export default ThemeToggleButton;
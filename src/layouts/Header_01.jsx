import React, { useState,useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import LanguageSelector from '../components/LanguageSelector';
import { loadTheme } from '../components/theme/themeUtils';
import ThemeToggleButton from '../components/theme/ThemeToggleButton'

import "./Header_01.css";

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
      return localStorage.getItem('theme') === 'dark';
    });
  
    useEffect(() => {
      loadTheme(isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);
  
    const toggleDarkMode = () => {
      setIsDarkMode(prevMode => {
        const newMode = !prevMode;
        localStorage.setItem('theme', newMode ? 'dark' : 'light');
        return newMode;
      });
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(prevState => !prevState);
    useEffect(() => {
        console.log(`Loading ${isDarkMode ? 'dark' : 'light'} theme`);
        loadTheme(isDarkMode ? 'dark' : 'light');
      }, [isDarkMode]);

    const handleThemeToggle = (isDarkMode) => {
        loadTheme(isDarkMode ? 'dark' : 'light');
      };
    
    return (
      <header className="header">
        <div className="logo">MyProject</div>
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? 'Close Menu' : 'Menu'}
        </button>
        <nav className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="controls">

        <ThemeToggleButton onToggle={handleThemeToggle} />
        </div>
      </header>
    );
  };
  
  export default Header;
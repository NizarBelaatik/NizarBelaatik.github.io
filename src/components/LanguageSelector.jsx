import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoLanguageSharp } from "react-icons/io5";
import LanguageDetector from 'i18next-browser-languagedetector';

const LanguageSelector = (props) => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const [dropdownLangOpen, setdropdownLangOpen] = useState(false);
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setdropdownLangOpen(false);
  };

  const toggleDropdownLangOpen = () => {
    setdropdownLangOpen(!dropdownLangOpen);
  };
  const closeDropdownLang = () => {
    setdropdownLangOpen(false);
  };

  document.title = props.page;
  return (
      
    <div className='lang_dp_container'
        onMouseEnter={toggleDropdownLangOpen}
        onMouseLeave={closeDropdownLang}>
        <a className='nav-link-lang' ><i style={{fontSize:"28px"}}><IoLanguageSharp /></i> {props.lang} </a>
        {dropdownLangOpen && (
            <div className="lang_dp-content">
                <a className="a_title"> {t('Language')} </a>
                
                <a className="a_select" onClick={() => changeLanguage('en')}>English</a>
                <a className="a_select" onClick={() => changeLanguage('fr')}>Français</a>
                
                
            </div>
        )}
    </div>
        
  );
};

export default LanguageSelector;

import React, { useState } from 'react';
import { IoLanguageSharp } from "react-icons/io5";

const DarkLightMode = (props) => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const [dropdownDLMOpen, setdropdownDLMOpen] = useState(false);
  
  const changeDisplay = (mode) => {
    //i18n.changeDisplay(mode);
    setdropdownDLMOpen(false);
  };

  const toggledropdownDLMOpen = () => {
    setdropdownDLMOpen(!dropdownDLMOpen);
  };
  const closeDropdownLang = () => {
    setdropdownDLMOpen(false);
  };

  document.title = props.page;
  return (
      
    <div className='DLM_dp_container'
        onMouseEnter={toggledropdownDLMOpen}
        onMouseLeave={closeDropdownLang}>
        <a className='nav-link-DLM' ><i style={{fontSize:"28px"}}><IoLanguageSharp /></i> {props.mode} </a>
        {dropdownDLMOpen && (
            <div className="DLM_dp-content">
                <a className="a_title"> {t('Language')} </a>
                
                <a className="a_select" onClick={() => changeDisplay('dark')}>English</a>
                <a className="a_select" onClick={() => changeDisplay('ligh')}>Français</a>
                
                
            </div>
        )}
    </div>
        
  );
};

export default DarkLightMode;
import React, { useState,useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import LanguageSelector from '../components/LanguageSelector';

import "./Header.css";


export default function Header(props) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('Home.Title');
  }, []);



  const [isVisible, setIsVisible] = useState(false);

  const showOverlay = () => {
    setIsVisible(true);
  };

  const hideOverlay = () => {
    setIsVisible(false);
  };

  return <>
        <button className={`menu-btn ${isVisible ? 'active' : 'mbopen'}`} onClick={isVisible ? hideOverlay : showOverlay}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </button>
      <header id="header"  className='header-top'>
          <div className="container">
      
              <h1><a href="/">{t('Info.username')}</a></h1>
              
              <div className="navbar_container">
                <ul  id="NavBar_a">
                  <li><a className='Home nav-link' href="/">{t('Home.Title')}</a></li>
                  <li><a className={ props.page=='About'?['nav-link active']: 'nav-link' } href="/#/About">{t('About.Title')}</a></li>
                  <li><a className={ props.page=='Resume'?['nav-link active']: 'nav-link' } href="/#/Resume">{t('Resume.Title')}</a></li>
                  <li><a className={ props.page=='Portfolio'?['nav-link active']: 'nav-link' } href="/#/Portfolio">{t('Portfolio.Title')}</a></li>
                  <li><a className={ props.page=='Contact'?['nav-link active']: 'nav-link' } href="/#/Contact">{t('Contact.Title')}</a></li>
                  
                    

                
                </ul>
              </div>

              <div className="social-links">
                  <a href={t('Info.Twitter')} className="twitter" target="_blank"><i className="bi bi-twitter"></i></a>
                  <a href={t('Info.Facebook')} className="facebook" target="_blank"><i className="bi bi-facebook"></i></a>
                  <a href={t('Info.Instagram')} className="instagram" target="_blank"><i className="bi bi-instagram"></i></a>
                  <a href={t('Info.Linkedin')} className="linkedin" target="_blank"><i className="bi bi-linkedin"></i></a>
                  
              </div>

              {isVisible && (
              <div className="fullscreen-overlay">
                <i className='bi bi-x close-btn' onClick={hideOverlay}></i>
                <div className="nv_toggle_con ">
                  <ul  id="NavBar_a">
                    <li><a className={ props.page=='Home'?['nav-link active']: 'nav-link' } href="/">{t('Home.Title')}</a></li>
                    <li><a className={ props.page=='About'?['nav-link active']: 'nav-link' } href="/#/About">{t('About.Title')}</a></li>
                    <li><a className={ props.page=='Resume'?['nav-link active']: 'nav-link' } href="/#/Resume">{t('Resume.Title')}</a></li>
                    <li><a className={ props.page=='Portfolio'?['nav-link active']: 'nav-link' } href="/#/Portfolio">{t('Portfolio.Title')}</a></li>
                    <li><a className={ props.page=='Contact'?['nav-link active']: 'nav-link' } href="/#/Contact">{t('Contact.Title')}</a></li>                  
                  </ul>
                </div>
              </div>
            )}
      
          </div>
    </header>
  </>;
}


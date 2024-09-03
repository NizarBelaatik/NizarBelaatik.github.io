//import '../App.css';
import React, { useState, useEffect,useRef  } from "react";

import TypingAnimation from '../components/home/TypingAnimation';


import { useTranslation } from 'react-i18next';
import LanguageSelector from '../components/LanguageSelector';




import '../assets/css/home.css';




function Home(){
  const [isSectionShown, setIsSectionShown] = useState(false);

    useEffect(() => {
        setIsSectionShown(true);
      }, []);

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
    };
    const { t } = useTranslation();

    const [isVisible, setIsVisible] = useState(false);

    const showOverlay = () => {
      setIsVisible(true);
    };

    const hideOverlay = () => {
      setIsVisible(false);
    };


  return<>


    <div className="main_home ">

      <button className={`menu-btn ${isVisible ? 'active' : ''}`} onClick={isVisible ? hideOverlay : showOverlay}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </button>
      <div className="container">
          <h1>{t('Home.Title_hello')}, {t('Home.Title_im')}</h1>
          <h1><span className="UserName">{t('Info.username')}</span></h1>
                
          
          <h2><span>{t('Home.Title_span2')}</span> {t('Home.Title_after_span')}</h2>

              
              
          <div className="navbar_container">
            <ul  >
              <li><a className='Home nav-link active' href="/">{t('Home.Title')}</a></li>
              <li><a className='About nav-link' href="/#/About">{t('About.Title')}</a></li>
              <li><a className='Resume nav-link' href="/#/Resume">{t('Resume.Title')}</a></li>
              <li><a className='Portfolio nav-link' href="/#/Portfolio">{t('Portfolio.Title')}</a></li>
              <li><a className='Contact nav-link' href="/#/Contact">{t('Contact.Title')}</a></li>
            </ul>
          </div>

          <div className="social-links">
            <a href={t('Info.Twitter')} className="twitter" target="_blank"><i className="bi bi-twitter"></i></a>
            <a href={t('Info.Facebook')} className="facebook" target="_blank"><i className="bi bi-facebook"></i></a>
            <a href={t('Info.Instagram')} className="instagram" target="_blank"><i className="bi bi-instagram"></i></a>
            <a href={t('Info.Linkedin')} className="linkedin" target="_blank"><i className="bi bi-linkedin"></i></a>
            
          </div>

      </div>
      {isVisible && (
        <div className="fullscreen-overlay">
          <i className='bi bi-x close-btn' onClick={hideOverlay}></i>
          <div className="nv_toggle_con ">
            <ul  id="NavBar_a">
              <li><a className='Home nav-link active' href="/#/About">{t('Home.Title')}</a></li>
              <li><a className='About nav-link' href="/#/About">{t('About.Title')}</a></li>
              <li><a className='Resume nav-link' href="/#/Resume">{t('Resume.Title')}</a></li>
              <li><a className='Portfolio nav-link' href="/#/Portfolio">{t('Portfolio.Title')}</a></li>
              <li><a className='Contact nav-link' href="/#/Contact">{t('Contact.Title')}</a></li>
            </ul>
          </div>
        </div>
      )}
  </div>
      
        
    


    
    </>
}
export default Home
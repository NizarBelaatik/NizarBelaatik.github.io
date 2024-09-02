//import '../App.css';
import React, { useState, useEffect } from "react";



import { useTranslation } from 'react-i18next';
import LanguageSelector from '../components/LanguageSelector';


import '../layouts/Header.css';
//import '../style.css';
import Header from '../layouts/Header';

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

    return<><Header page={'Home'} H_position="" /></>
    //
  return<>


    <div className="main_home ">
    <i className={`bi ${isNavOpen ? '' : 'bi-list'} main_home_mobile-nav-toggle`}
              onClick={toggleNav}
            ></i>
    <div className="container">
        
        <h1><a href="/">Night Code</a></h1>
        
        <h2>{t('Home.Title_before_span')} <span>{t('Home.Title_span')}</span> {t('Home.Title_after_span')}</h2>
          

            
            
        <div id="navbar" className={`navbar ${isNavOpen ? ' mobile-nav-toggle main_home_navbar' : ''} `}>
            <i className='bi bi-x nav_bar_close'onClick={toggleNav}></i>
            <ul>
            <li><a className="nav-link active" href="/">{t('Home.Title')}</a></li>
            <li><a className="nav-link" href="/About">{t('About.Title')}</a></li>
            <li><a className="nav-link" href="/Resume">{t('Resume.Title')}</a></li>
            <li><a className="nav-link" href="/Portfolio">{t('Portfolio.Title')}</a></li>
            <li><a className="nav-link" href="/Contact">{t('Contact.Title')}</a></li>
            <li ><LanguageSelector lang={t('lang')}/></li>
            <i
              className={`bi ${isNavOpen ? 'bi-x' : 'bi-list'} mobile-nav-toggle`}
              onClick={toggleNav}
            ></i>
            </ul>
            
        </div>
        <div className="social-links">
            <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
            <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
            <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
            
        </div>

      </div>
    </div>
      
        
    


    
    </>
}
export default Home
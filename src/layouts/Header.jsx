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
    return (
        <header id="header"  className={ props.H_position == 'Top'? "header-top":'header-home'}>
            <div className="container">
        
                <h1><a href="/">{t('Info.username')}</a></h1>
                
                <h2>{t('Home.Title_before_span')} <span>{t('Home.Title_span')}</span> {t('Home.Title_after_span')}</h2>

                <nav id="navbar" className={`navbar ${isNavOpen ? 'navbar-mobile' : ''} `}>
                    <ul>
                    <li><a className={ props.page=='Home'?['nav-link active']: 'nav-link' } href="/">{t('Home.Title')}</a></li>
                    <li><a className={ props.page=='About'?['nav-link active']: 'nav-link' } href="/About">{t('About.Title')}</a></li>
                    <li><a className={ props.page=='Resume'?['nav-link active']: 'nav-link' } href="/Resume">{t('Resume.Title')}</a></li>
                    <li><a className={ props.page=='Portfolio'?['nav-link active']: 'nav-link' } href="/Portfolio">{t('Portfolio.Title')}</a></li>
                    <li><a className={ props.page=='Contact'?['nav-link active']: 'nav-link' } href="/Contact">{t('Contact.Title')}</a></li>
                    
                    

                    


                    </ul>
                    <i
                      className={`bi ${isNavOpen ? 'bi-x' : 'bi-list'} mobile-nav-toggle`}
                      onClick={toggleNav}
                    ></i>
                </nav>
                <div className="social-links">
                    <a href={t('Info.Twitter')} className="twitter" target="_blank"><i className="bi bi-twitter"></i></a>
                    <a href={t('Info.Facebook')} className="facebook" target="_blank"><i className="bi bi-facebook"></i></a>
                    <a href={t('Info.Instagram')} className="instagram" target="_blank"><i className="bi bi-instagram"></i></a>
                    <a href={t('Info.Linkedin')} className="linkedin" target="_blank"><i className="bi bi-linkedin"></i></a>
                    
                </div>
        
            </div>
      </header>
    );
  }
  

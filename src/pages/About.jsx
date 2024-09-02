import React, { useState, useEffect } from "react";
import Header from '../layouts/Header';
//import Header from '../layouts/Header_01';


import '../assets/css/about.css';

import { useTranslation } from 'react-i18next';

// Icons & Logo
import {   FaHtml5 ,FaCss3 , FaReact ,FaBootstrap   } from "react-icons/fa";
import {  FaPython, FaJava, FaPhp , FaLaravel ,FaDatabase ,FaCode ,   } from "react-icons/fa";
import { FaServer, FaCogs,FaProjectDiagram, FaGithub ,FaGitAlt  } from 'react-icons/fa';

import { SiJavascript, SiMysql ,SiJquery ,SiDjango  } from "react-icons/si";
import {SiSelenium  , SiPandas  , SiNumpy} from "react-icons/si";
import {SiApache,SiXampp} from "react-icons/si";

import {DiDjango } from "react-icons/di";
import {TbBrandDjango} from "react-icons/tb";


import LanguageSelector from '../components/LanguageSelector';

import getProfileImage from '../components/profile/getProfileImage';


function About(){
    const { t } = useTranslation();
    const [isSectionShown, setIsSectionShown] = useState(false);

    useEffect(() => {
        setIsSectionShown(true);
      }, []);
    

    return<>
    <Header page={'About'} H_position="Top" />
    <section id="about" className={isSectionShown ? 'about section-show' : ''}>
      
      <LanguageSelector lang={t('lang')} page={t('About.Title')}/>
      
      <div className="about-me container">

        <div className="section-title">
          <h2>{t('About.Title')}</h2>
          <p>{t('About.About_me.Title_1')}</p>
        </div>

        <div className="row">
          <div className="col-lg-4 flex_center" data-aos="fade-right">
            <div>
              <img src={t("Info.ProfileImage")} className="about_ProfileImage" alt=""/>
            </div>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>{t("About.About_me.Title_11")}</h3>
            <p className="fst-italic">
              {t('About.Description1')}
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>{t("About.About_me.Birthday")}:</strong> <span>{t("About.About_me_data.Birthday")}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>{t("About.About_me.Website")}:</strong> <span>{t("About.About_me_data.Website")}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>{t("About.About_me.Phone")}:</strong> <span>{t("About.About_me_data.Phone")}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>{t("About.About_me.City")}:</strong> <span>{t("About.About_me_data.City")}</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>{t("About.About_me.Age")}:</strong> <span>{t("About.About_me_data.Age")}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>{t("About.About_me.Degree")}:</strong> <span>{t("About.About_me_data.Degree")}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>{t("About.About_me_data.Email")}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>{t("About.About_me.Freelance")}:</strong> <span>{t("About.About_me_data.Freelance")}</span></li>
                </ul>
              </div>
            </div>
            <p>
              {t('About.Description2')}
            </p>
            <p>
              {t('About.Description3')}
            </p>
          </div>
        </div>

      </div> 

      

      <div className="Skills container">
        <div className="section-title">
          <h2>Skills</h2>
        </div>
        
        <div className="row">
          
          <h3 className="Skills-title"><i><FaCode /></i> {t("About.Skills.Title_1")}</h3>

          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
            
              <i><FaHtml5   style={{ color: '#E44D26 ' }}/></i>

              <h3>HTML</h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
            
              <i><FaCss3  style={{ color: '#1572B6 ' }} /></i>

              <h3>CSS</h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
            
              <i><SiJavascript  style={{ color: '#F7E018 ' }}/></i>

              <h3>JAVASCRIPT</h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
            
              <i><FaReact   style={{ color: '#61DAFB ' }}/></i>

              <h3>React.js</h3>
            </div>
          </div> 

          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
            
              <i><SiJquery    style={{ color: '#0769AD ' }}/></i>

              <h3>Jquery</h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
            
              <i><FaBootstrap    style={{ color: '#7952B3 ' }}/></i>

              <h3>Bootstrap</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="Skills container">
        <div className="row">

          <h3 className="Skills-title"><i><FaCogs /></i> {t("About.Skills.Title_2")}</h3>

          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
            
              <i><img src="https://www.vectorlogo.zone/logos/python/python-icon.svg" alt="" width="38px"/></i>

              <h3>Python</h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i><TbBrandDjango   style={{  color:'#092E20' }}/></i>
              <h3>Django</h3>
            </div>
          </div>
        </div> 

        <div className="row">
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i><FaPhp   style={{ color: '#787CB5' }}/></i>
              <h3>PHP</h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i><FaLaravel   style={{ color: '#FF2D20 ' }}/></i>
              <h3>Laravel</h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i><img src="https://www.vectorlogo.zone/logos/java/java-icon.svg" alt="" width="38px"/></i>
              <h3>JAVA</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i><FaJava   style={{ color: '#007396' }}/></i>
              <h3>JEE</h3>
            </div>
          </div>
        </div> 

      </div>


      <div className="Skills container">
        <div className="row">
          
          <h3 className="Skills-title"><i><FaProjectDiagram  /></i> {t("About.Skills.Title_3")}</h3>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i><img src="https://cdn.worldvectorlogo.com/logos/c-1.svg" alt="" width="38px"/></i>
              <h3>C</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i><img src="https://cdn.worldvectorlogo.com/logos/c.svg" alt="" width="38px"/></i>
              <h3>C++</h3>
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i><img src="https://cdn.worldvectorlogo.com/logos/numpy-1.svg" alt="" width="38px"/></i>
              <h3>NumPy</h3>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i><img src="https://cdn.worldvectorlogo.com/logos/pandas.svg" alt="" width="38px"/></i>
              <h3>Pandas</h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i><SiSelenium    style={{ color: '#43B02A ' }}/></i>
              <h3>Selenium</h3>
            </div>
          </div>


          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i><img src="https://www.vectorlogo.zone/logos/qtio/qtio-icon.svg" alt="" width="38px"/></i>
              <h3>PyQt</h3>
            </div>
          </div>
          
        </div>


        <div className="row">
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i><SiApache   style={{ color: '#CF1F3F '}}/></i>
              <h3>Apache</h3>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i><SiXampp     style={{ color: '#E14D43 '}}/></i>
              <h3>XAMPP</h3>
            </div>
          </div>
          
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i><FaGithub   style={{ color: '#fafbfc '}}/></i>
              <h3>Github</h3>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i><FaGitAlt    style={{ color: '#f34f29 '}}/></i>
              <h3>Git</h3>
            </div>
          </div>
          
        </div>
      </div>


      <div className="Skills container">
        <div className="row">
          
          <h3 className="Skills-title"><i><FaServer  /></i> {t("About.Skills.Title_4")}</h3>
          
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i><FaDatabase    style={{ color: '#E34F26 ' }}/></i>
              <h3>SQL</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i><SiMysql    style={{ color: '#00758F ' }}/></i>
              <h3>MySQL</h3>
            </div>
          </div>

          

          
        </div>
      </div>

    </section>
    </>
}
export default About
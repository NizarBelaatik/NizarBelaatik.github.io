import React, { useState, useEffect } from "react";
import Header from '../layouts/Header';
import '../assets/css/resume.css';

import { useTranslation } from 'react-i18next';

import LanguageSelector from '../components/LanguageSelector';
import i18next from 'i18next';

function Resume(){
  
  const [isSectionShown, setIsSectionShown] = useState(false);

  useEffect(() => {
      setIsSectionShown(true);
    }, []);
    
  const { t } = useTranslation();

  const currentLang = i18next.language || 'en';
  const Resume = i18next.getResource(currentLang, 'translation', 'Resume')

  return   <>
    <Header page={'Resume'} H_position="Top" />
    <section id="resume" className={isSectionShown ? 'resume section-show' : ''}>
              
      <LanguageSelector lang={t('lang')} page={t('Resume.Title')}/>
      
      <div className="container">

        <div className="section-title">
          <h2>{t("Resume.Title")}</h2>
          <p>{t("Resume.Title_2")}</p>
        </div>

        <div className="row">
          <div className="col-lg-6">

            <h3 className="resume-title">{t("Resume.Summary.Title")}</h3>
            <div className="resume-item pb-0">
              <h4>{t('Info.username')}</h4>
              {Resume.Summary.Sum.map(sum => (
                <p><em>{sum}</em></p>
              ))}
              <p>
              </p>
              <ul>
                <h3>{t('Titles.keyhigh')}</h3>
                <ul>{Resume.Summary.KeyHigh.map(keyhigh => (
                  <li>{keyhigh}</li>
                ))}</ul>
                
              </ul>

              <ul>
                <li>{t('Info.Address')}</li>
                <li>{t('Info.Phone')}</li>
                <li>{t('Info.Email')}</li>
              </ul>
              <p></p>
            </div>


            <h3 className="resume-title">{t("Resume.Education.Title")}</h3>
              {Resume.Education.DATA.map( data =>(
                  <div className="resume-item">
                    <h4>{data.Title1}</h4>
                    <h5>{data.Date}</h5>
                    <p><em>{data.Title2}</em></p>
                  </div>
                )
              )}


          </div>



          <div className="col-lg-6">
            <h3 className="resume-title">{t("Resume.P_E.Title")}</h3>
            {Resume.P_E.DATA.map( data =>(
                  <div className="resume-item">
                    <h4>{data.Title1}</h4>
                    <h5>{data.Date}</h5>
                    <p><em>{data.Title2}</em></p>
                    <p></p>
                    <ul>
                      {data.About.map(aboutData =>(
                        <li>{aboutData}</li>
                      ))}
                    </ul>
                    
                    <p></p>
                </div>
                )
              )}


            


          </div>
        </div>

      </div>
    </section>
    </>
}
export default Resume
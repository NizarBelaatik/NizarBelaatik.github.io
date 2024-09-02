import React, { useState, useEffect } from "react";

import LanguageSelector from '../LanguageSelector';
import { useTranslation } from 'react-i18next';

import SpanPCate  from '../span_project_technology/span_project_technology';
import ImageSlideshow from '../portfolio/ImageSlideshow';
import NestedList from '../portfolio/NestedList';
import TechnologyUsed from '../portfolio/TechnologyUsed';
import TechnoUsed from '../portfolio/TechnoUsed';

import VisaulsMedia from '../portfolio/VisaulsMedia';

import {  FaCode ,  FaCogs,FaProjectDiagram,FaServer,FaGithub } from "react-icons/fa";

function ProTypeDesk({project}){

    const { t } = useTranslation();
    
    return <>
        
        <section id="project_details"  className='project_details section-show'>
                  
            <LanguageSelector lang={t('lang')}  page={project.title}/>

            <div className="container">

                <div className="section-title">
                    <h2>{t('Titles.project')}</h2>
                    <p>{project.title}</p>
                </div>
                <div className="row container_Header">
                    <div className="col-lg-9">
                        <ImageSlideshow images={project.image} main_img={project.image[0]}/>

                    </div>
                    <div className="col-lg-3 info_01">
                        <h2 className="title">{project.title}</h2>
                        <h3><strong>{t('Portfolio.Project_date')}:</strong> {project.date}</h3>
                        <h3><strong>{t('Portfolio.Category')}:</strong> {project.category}</h3>
                        <h3><strong>{t('Portfolio.Client_Company')}:</strong> {project.client_for}</h3>
                        <h3><strong>{t('Portfolio.platforme')}:</strong> {project.platforme}</h3>
                        <h3><strong>{t('Portfolio.Role')}:</strong> {project.role}</h3>
                        <h3><strong>{t('Portfolio.Project_Description')}:</strong> {project.description}</h3>
                        <h3><strong>GitHub:</strong> <a href={project.github_link} ><FaGithub   style={{ color: '#fafbfc ',fontSize:'32px'}}/></a></h3>

                    </div>


                </div>
                
                
                <div className="row container_row">
                    <h2 className="project-title">{t('Portfolio.TechnologyUsed')}</h2>
                    
                    <TechnologyUsed TechUsed ={project.technology_used}/>

                </div>



                <NestedList TITLE={t('Portfolio.RoleResp')} DATA={project.RoleResp} />
                <NestedList TITLE={t('Portfolio.KeyFeatures')} DATA={project.KeyFeatures} />
                <NestedList TITLE={t('Portfolio.ChallSolu')} DATA={project.ChallSolu} />
                <NestedList TITLE={t('Portfolio.Outcome')} DATA={project.Outcome} />
                <NestedList TITLE={t('Portfolio.Reflection')} DATA={project.Reflection} />
                <VisaulsMedia TITLE={t('Portfolio.ScreenShotDiag')} folderid={project.folderid} DATA={project.ScreenShotDiag}  ScreenShot={t('Portfolio.ScreenShot')} Diagrams={t('Portfolio.Diagrams')} />




            </div>
        </section>



    </>
}
export default ProTypeDesk;
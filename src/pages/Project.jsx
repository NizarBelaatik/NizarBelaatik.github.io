import React, { useState, useEffect } from "react";
import Header from '../layouts/Header';
import '../assets/css/project.css';


import ProTypeWeb from '../components/portfolio/ProTypeWeb';
import ProTypeDesk from '../components/portfolio/ProTypeDesk';

import resources from '../i18n';

import { useTranslation } from 'react-i18next';

import LanguageSelector from '../components/LanguageSelector';


import i18next from 'i18next';

import { useParams } from 'react-router-dom';

import {  FaCode ,  FaCogs,FaProjectDiagram,FaServer,FaGithub } from "react-icons/fa";

function Project(){

    const { t } = useTranslation();


    const { id } = useParams();
    const currentLang = i18next.language || 'fr';
    const projects = i18next.getResource(currentLang, 'translation', 'projects')
    const project = projects.find(p => p.id === id);
    useEffect(() => {
        document.title = project?project.title:t('Titles.project');
      }, []);
      
    if (!project) {
        return <div>Project not found</div>;
    }


    
    return <>
        
        <Header page={'project_details'} H_position="Top" />
        

        {project.projectType == 'web'? <ProTypeWeb project={project}/>: ''}
        {project.projectType == 'desk'? <ProTypeDesk project={project}/>: ''}
    </>
}
//{project.KeyFeatures? <NestedList TITLE={t('Portfolio.RoleResp')} DATA={project.RoleResp} /> : "" }
export default Project
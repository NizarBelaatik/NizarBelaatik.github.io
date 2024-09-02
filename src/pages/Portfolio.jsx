import React, { useState, useEffect } from "react";
import Header from '../layouts/Header';
import '../assets/css/portfolio.css';
import Filter from '../components/portfolio/Filter';

import ProjectItem from '../components/portfolio/ProjectItem';

import resources from '../i18n';

import { useTranslation } from 'react-i18next';

import LanguageSelector from '../components/LanguageSelector';

import i18next from 'i18next';


function Portfolio(){
    const { t } = useTranslation();
    const [isSectionShown, setIsSectionShown] = useState(false);

    useEffect(() => {
        setIsSectionShown(true);
      }, []);
    

    const [selectedTechnology, setSelectedTechnology] = useState(t('Titles.All'));
    const [searchText, setSearchText] = useState('');
    
    

    const [filteredProjects, setFilteredProjects] = useState([]);

    useEffect(() => {
        const filterProjects = () => {
          const currentLang = i18next.language || 'en';
          const projects = i18next.getResource(currentLang, 'translation', 'projects') || [];
      
          return projects.filter(project => {
            // Check if the project matches the selected Technology
            const matchesTechnology = selectedTechnology === t('Titles.All')  || project.technology.includes(selectedTechnology);
      
            // Check if the search text matches the project title or any Technology
            
            const matchesSearchText = 
              project.title.toLowerCase().includes(searchText.toLowerCase()) || 
              project.technology_used.front_end?.some(cat => cat.toLowerCase().includes(searchText.toLowerCase())) || 
              project.technology_used.back_end?.some(cat => cat.toLowerCase().includes(searchText.toLowerCase())) || 
              project.technology_used.database?.some(cat => cat.toLowerCase().includes(searchText.toLowerCase())) || 
              project.technology_used.tech?.some(cat => cat.toLowerCase().includes(searchText.toLowerCase())) || 
              project.technology_used.Proglang?.some(cat => cat.toLowerCase().includes(searchText.toLowerCase()));

            return matchesTechnology && matchesSearchText;
          });
        };
      
        setFilteredProjects(filterProjects());
      }, [selectedTechnology, searchText]);

    return <>
        <Header page={'Portfolio'} H_position="Top" />
        <section id="portfolio"  className={isSectionShown ? 'portfolio section-show' : ''}>
                  
            <LanguageSelector lang={t('lang')} page={t('Portfolio.Title')}/>
      
            <div className="container">

                <div className="section-title">
                    <h2>Portfolio</h2>
                    <p>{t('Portfolio.My_works')}</p>
                </div>

                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center">
                    <Filter
                        setSelectedTechnology={setSelectedTechnology}
                        selectedTechnology={selectedTechnology}
                        searchText={searchText}
                        setSearchText={setSearchText}
                        placeHolder={t('Titles.Search')}
                        all={t('Titles.All')}
                    />
                    </div>
                </div>

                <div className="row portfolio-container">
                    {filteredProjects.map(project => (
                      <ProjectItem key={project.id} project={project} />
                    ))}
                </div>
                
            </div>
        </section>



    </>
}
export default Portfolio
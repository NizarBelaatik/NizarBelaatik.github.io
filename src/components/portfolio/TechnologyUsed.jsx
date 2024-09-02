import React from 'react';
import SpanPCate  from '../span_project_technology/span_project_technology';
import {  FaCode ,  FaCogs,FaProjectDiagram,FaServer,FaGithub } from "react-icons/fa";
import TechnoUsed from '../portfolio/TechnoUsed';
import { useTranslation } from 'react-i18next';


//{Object.entries(TechUsed).map(([category, items]) => (
//    <TechnoUsed TITLE={t("Titles.Proglang")} DATA={project.technology_used.Proglang} ICON="Proglang"/>
//))}

const TechnologyUsed = ({ TechUsed}) => {
    //const TechUsed =project.technology_used;
    const { t } = useTranslation();
    const T_U = [
        {TU_Checker:'Proglang', TU_Title:t("Titles.Proglang"), TU_Data:TechUsed.Proglang?TechUsed.Proglang : '' ,TU_Icon:<i><FaCogs /></i>},
        {TU_Checker:'front_end', TU_Title:t("Titles.front_end"), TU_Data:TechUsed.front_end?TechUsed.front_end:null ,TU_Icon:<i><FaCode /></i>},
        {TU_Checker:'back_end', TU_Title:t("Titles.back_end"), TU_Data:TechUsed.back_end?TechUsed.back_end:null ,TU_Icon:<i><FaCogs /></i>},
        {TU_Checker:'database', TU_Title:t("Titles.database"), TU_Data:TechUsed.database?TechUsed.database:null ,TU_Icon:<i><FaServer /></i>},
        {TU_Checker:'tech', TU_Title:t("Titles.tech"), TU_Data:TechUsed.tech?TechUsed.tech:null ,TU_Icon:<i><FaProjectDiagram /></i>},
        {TU_Checker:'techFra', TU_Title:t("Titles.techFra"), TU_Data:TechUsed.techFra?TechUsed.techFra:null ,TU_Icon:<i><FaProjectDiagram /></i>}
    ]

    return <>
            {T_U.map(t_u =>(
                <TechnoUsed TITLE={t_u.TU_Title} DATA={t_u.TU_Data} ICON={t_u.TU_Icon}/>
                
            ))}
    </>
  
};

export default TechnologyUsed;


import React from 'react';
import SpanPCate  from '../span_project_technology/span_project_technology';
import {  FaCode ,  FaCogs,FaProjectDiagram,FaServer,FaGithub } from "react-icons/fa";

const TechnoUsed = ({ TITLE, DATA,ICON}) => {

    return <>
        {DATA? <div className="Technology-item">
            <h4>{ICON} {TITLE}</h4>
                <div className="project_cate ">
                { DATA.map(technology => (
                    <SpanPCate  title={technology} />
                ))}
            </div>
        </div>:''}
    </>
    
  
};

export default TechnoUsed;
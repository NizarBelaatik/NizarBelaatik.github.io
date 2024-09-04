import React from 'react';
import { Link } from 'react-router-dom';
import SpanPCate  from '../span_project_technology/span_project_technology';
import { FaLink , FaPlus } from "react-icons/fa6";
import { FaExternalLinkAlt} from "react-icons/fa";

import { useTranslation } from 'react-i18next';

const ProjectItem = ({ project }) => {
  const { t } = useTranslation();

  return (<>

    <div className="col-lg-4 col-md-6 project_item_container ">
      <div className="project_item">
          <div>
              <img  className="project_img" src={project.image[0]} alt={project.title}/>
              <div className="project_more">
                  <Link to={`/project/${project.id}`}><a className="project_link" ><FaPlus size={'56px'}/></a></Link>
              </div>
          </div>
          
          <div className="portfolio_con">
              <h2 className="project_title">{project.title}</h2>
              <p>{project.description}</p>
              <div className="project_cate ">
                { project.technology.map(technology => (
                  <SpanPCate  title={technology} />
                  ))}

              </div>

              <div className="projectM">
                <a href={`/#/project/${project.id}`} className="projectM_a">{t("Titles.more")}...</a>
              </div>
              
          </div>
          
      </div>
    </div>
    </>
  );
};

export default ProjectItem;
import React from 'react';
import VMImage from './VMImage';
import { MdMargin } from 'react-icons/md';

const VisaulsMedia = ({ TITLE,folderid, DATA,ScreenShot ,VideoDemo,Diagrams}) => {
    if(!DATA){
        return <h2 className="project-title">{TITLE}</h2>;
    }
    return <>
        <h2 className="project-title">{TITLE}</h2>

        {DATA.ScreenShot? 
            <ul className="nested_list_data">
                <ul>
                    <li className="NLD_1">
                        {ScreenShot}
                        { DATA.ScreenShot.map(data1 => (
                            <>
                                <ul className='VisMed'>
                                    <li className='VisMed_li'>{(data1.ImInTitle?data1.ImInTitle:'')}</li>
                                    <ul>
                                        

                                        { data1.ImInData.map(data2 => (
                                            <>
                                            {data2.image.map(data3 => (
                                            <div className="col-lg-10" >
                                                <img  src={process.env.PUBLIC_URL + '/images/projects/project'+folderid+"/"+data3} alt="" />
                                            </div>
                                            ))}

                                            { data2.info.map(data3 => (
                                                <li className="NLD_2">
                                                    {data3}

                                                </li>
                                                
                                            ))}
                                            </>
                                           
                                        ))}

                                        
                                    </ul>
                                    
                                </ul>

                            </>
                        ))}
                    </li>
                </ul>
            </ul>
        :""}

        {DATA.VideoDemo? 
            <ul className="nested_list_data">
                <ul >
                    { DATA.VideoDemo.map(data1 => (
                        <li className="NLD_1">
                            {VideoDemo}
                            <ul className='VidDemo'>
                                {data1.video? data1.video.map(data2 => (

                                    <video className='col-lg-9' width="400" controls src={process.env.PUBLIC_URL + '/images/projects/project'+folderid+"/"+data2} />

                                )):''}

                                {data1.info? data1.info.map(data2 => (
                                    <li className="NLD_2">{data2}</li>

                                )):''}
                            </ul>
                        </li>
                    ))}
                </ul>
            </ul>
        
        :""}
        

        {DATA.Diagrams? 
            <ul className="nested_list_data">
                <ul>
                    <li className="NLD_1">
                        {Diagrams}
                        { DATA.Diagrams.map(data1 => (
                            <>
                                <ul className='VisMed'>
                                    <li className='VisMed_li'>{(data1.ImInTitle?data1.ImInTitle:'')}</li>
                                    <ul>
                                        

                                        { data1.ImInData.map(data2 => (
                                            <>
                                            {data2.image.map(data3 => (
                                            <div className="col-lg-10" >
                                                <img  src={process.env.PUBLIC_URL + '/images/projects/project'+folderid+"/"+data3} alt="" />
                                            </div>
                                            ))}

                                            { data2.info.map(data3 => (
                                                <li className="NLD_2">
                                                    {data3}

                                                </li>
                                                
                                            ))}
                                            </>
                                           
                                        ))}

                                        
                                    </ul>
                                    
                                </ul>

                            </>
                        ))}
                    </li>
                </ul>
            </ul>
        :""}
        
            
        



    </>
    
  ;
};

export default VisaulsMedia;

import React from 'react';

const NestedList = ({ TITLE, DATA}) => {
    if(!DATA){
        return '';
    }
    if(DATA.Title_2 ){
        return <>
        <h2 className="project-title">{TITLE}</h2>
        <ul className="nested_list_data">
            <h5>{DATA.Title_2}</h5>
        </ul>
    </>
    }
    return <>
        <div className="row container_row" >
            <h2 className="project-title">{TITLE}</h2>
            {DATA? DATA.map(DA => (
                <ul className="nested_list_data" >
                    {DA.Title_1? <h3>{DA.Title_1}:</h3>:""}
                    <ul>
                        {DA.Data? DA.Data.map(data1 => (
                            <li className="NLD_1" style={DA.Data_without_Style ? { listStyleType: 'none' } : {}}>
                                {data1.Title}
                                <p>{data1.Title2}</p>
                                <ul>
                                    { data1.Data? data1.Data.map(data2 => (
                                        <li className="NLD_2" style={DA.Data_without_Style_2 ? { listStyleType: 'none' } : {}}>
                                            {data2}
                                        </li>
                                    )):""}
                                </ul>
                            </li>
                        )):""}
                    </ul>

                </ul>)):''}
        </div>
    </>
    
  ;
};

export default NestedList;
import React from "react";
import './styles.scss';

const PageHeaderContent = (props) =>{

    const {headerText,icon} = props;
    return(

        <div className="wrapper">
            <h2>{headerText}</h2>
            <span style={{marginRight:"14px"}}>{icon}</span>
        </div>
    )
}

export default PageHeaderContent;
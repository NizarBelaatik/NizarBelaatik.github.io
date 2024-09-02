import React from "react";

function Nav_link_active(props){
    return(
        <a className="nav-link active" href="/{props.page}">{props.page}</a>
    );
}



export default Nav_link_active
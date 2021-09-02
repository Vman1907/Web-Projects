import React from "react";
import "./navbar.css"

function Navbar(props){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
             <a class="navbar-brand">{props.logo}</a>
             <span class="navbar-text">
                        {props.profileName}
            </span>
             <span class="navbar-text">
                        {props.status}
            </span>
        </nav>
    )
}

export default Navbar;
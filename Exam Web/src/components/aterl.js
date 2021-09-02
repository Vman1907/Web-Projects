import React from "react";
import "./alert.css"

function Alert(props){
    return(
        <div className="custom-alert">
            <p>{props.alertMessage}</p>
        </div>
    )
}

export default Alert;
import React from "react";
import "./card.css"

function Card(props){
    return(
        <div className="card">
        <h4>{props.header}</h4>
        <p>{props.content}</p>
        </div>
    )
}

export default Card;
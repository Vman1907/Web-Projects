import React from "react";
import "./info.css";

function Info (props){
    return(
        <div className="info">
        <div className="row">
        <div className="col-lg-9 col-sm-8">
            <h5>{props.header}</h5>
            <hr/>
            <div className="row">
                <div className="col-lg-5 col-sm-6">

                    <p>{props.time}</p>
                </div>
                <div className="col-lg-5 col-sm-6">
                    <p>{props.info}</p>
                </div>
            </div>
            <p>{props.about}</p>
        </div>
        <div className="col-lg-3 col-sm-4" style={{display: "inline-flex"}}>
                <hr className=" " />
                <button>START</button>
        </div>
        </div>
        </div>
    )
}

export default Info;
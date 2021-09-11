import React from 'react'
import $ from "jquery"
import "./Data.css"
import Search from "./search.svg"
import Globe from "./globe.svg"

export default function Data(){

    

    function clickhandler(e){
        $(".active").removeClass("active");
        $(e.target).addClass("active");
    }

    return(
        <div className="Data">
        <div className="row">
            <div className="col-2">

            </div>
        <div className="col-10">
            <span className="header">Student management</span>
            <span className="filter">
            <span className="icon">
                <img src={Search} alt="saerch"></img>
            </span>
                <input type="text" placeholder="Search student"/>
            <span className="icon">
                <img src={Globe} alt="globe"></img>
            </span>
                <input type="text" placeholder="All state"/>
                <input type="text" placeholder=""/>
            </span>
            <span className="selector">
                <span onClick={clickhandler} id="all">All student</span>
                <span onClick={clickhandler} id="registered">Registered</span>
                <span onClick={clickhandler} id="interested">Interested</span>
            </span>
            <div className="data-content"></div>
        </div>
        </div>
        </div>
    )
}
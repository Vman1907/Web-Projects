import React,{useEffect} from 'react'
import "./Stats.css"
import Phone from "./phone.svg"
import Ring from "./ring.svg"

export default function Stats(){
    return(
        <div className="Stats">
        <div className="header justify-content-center">
            <img src={Phone} className="icon" alt="phone"/>
            <span className="text">Call Statistics</span>
            <img src={Ring} alt="ring"/>
        </div>

            <div id="first">
            <span>Call Target</span>
            <span>4556</span>
            </div>
            <div id="second">
                <span className="done"></span>
                    <span className="text">
                    Call Attended <img />
                    </span>
                    <span>46</span>
            </div>
            <div id="third">
                <span className="done"></span>
                <span className="text">
                Call Left <img />
                </span>
                <span>4550</span>
            </div>
        </div>
    )
}
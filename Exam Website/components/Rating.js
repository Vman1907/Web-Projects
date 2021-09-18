import React from 'react'
import "./Rating.css"
import $ from 'jquery'

export default function Rating({className}){

    function clickHandler(e){
        console.log(`${className} .active`);
        $(`.${className} .active`).removeClass("active")
        $(e.target).addClass("active")     
    }

    return(
        <div className= {`row rating ${className}`}>
            <div id="1" onClick={clickHandler} className="col-1">1</div>
            <div id="2" onClick={clickHandler} className="col-1">2</div>
            <div id="3" onClick={clickHandler} className="col-1">3</div>
            <div id="4" onClick={clickHandler} className="col-1">4</div>
            <div id="5" onClick={clickHandler} className="col-1">5</div>
            <div id="6" onClick={clickHandler} className="col-1">6</div>
            <div id="7" onClick={clickHandler} className="col-1">7</div>
            <div id="8" onClick={clickHandler} className="col-1">8</div>
            <div id="9" onClick={clickHandler} className="col-1">9</div>
            <div id="10" onClick={clickHandler} className="col-1">10</div>
        </div>
    )
}
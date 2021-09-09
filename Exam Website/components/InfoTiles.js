import React from 'react'
import "./InfoTile.css"

export default function Info(props){
    return(
        <div className="wrapper justify-content-center">
            <div className="row justify-content-center">
                <div className="col-4">
                <img src={props.icon} alt="green_phone" />
                </div>
                <div className="col-8">
                    <span>{props.title}</span>
                    <hr />
                    <span>{props.data}</span>
                </div>
            </div>
        </div>
    )
}
import React from 'react'
import "./MsgPopup.css"
import IMG from "./Frame.svg"

export default function Popup(){
    return(
        <div className="background">
        <div className="row popup">
        <div className="col-lg-8">
            <span>Send Message</span>
            <span>Name : Varshmaan Sonkar</span>
            <span>Select mode</span>

            <span>
                <input type="checkbox" />
                <label>Email</label>
                <input type="checkbox" />
                <label>SMS</label>
                <input type="checkbox" />
                <label>Dashboard</label>
            </span>
                <button>Send Notification</button>

            </div>
                <div className="col-lg-2">
                <img alt="" src={IMG}></img>
            </div>
        </div>
        </div>
    )
}
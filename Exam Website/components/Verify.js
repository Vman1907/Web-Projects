import React,{useState} from 'react'
import "./Verify.css"
import pic from "./pic.svg"

export default function Verify(){

    const [section, setSection] = useState("mobile phone number");
    const [button, setButton] = useState("Next");

    function clickHandler(){
        setSection("Email");
        setButton("Verify");
    }


    return(
        <div className="wrapper row">
            <div className="col-lg-6 justify-content-center">
                <div className="content">
                    <span className="header">Verify Your <span className="orange">Email </span> And <span className="orange"> Phone </span></span>
                    <span className="_or"> <p>Enter your verifiation code (OTP)</p><p>that you recieved on your {section}.</p></span>
                    <input type="text" placeholder="sdfsafsafd"/>
                    <a onClick={clickHandler}>{button}</a>
                    <span className="resend orange">Resend code</span>
                </div>
            </div>
            <div className="col-lg-6">
                    <img src={pic} alt="picture"/>
            </div>
        </div>
    )
}
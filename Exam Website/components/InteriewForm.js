import React from 'react'
import "./Interview.css"
import Rating from "./Rating"

const CandidateSrc = [
    "",
"NTTF OWN",
"JUST HR",
"E-Compat",
"Career Tree",
"Jashuva",
"Heyinz",
"Harsh"]

const Industry = [
    "",
    "Interview Fail",
"Ace Designers",
"Ankit Fasteners Pvt. Ltd",
"Automotive Axles Pvt Ltd - DIP",
"Automotive Axles Pvt Ltd - ITI",
"Guhring India Private Limited",
"Indo MIM - Doddabalapur - 12th",
"Indo MIM - Doddabalapur - ITI",
"Indo MIM - Doddabalapur - Diploma",
"Indo MIM - Hoskotte - ITI",
"Indo MIM - Obdhevanahalli - ITI",
"Rossell Techsys",
"Sartorius - 12th",
"Sartorius - ITI",
"Schneider Attibile 12th",
"Schneider Attibile ITI",
"Schneider Jigani 12th",
"Schneider Hyderabad 12th",
"TITAN",
"TaeguTec India Pvt. Ltd",
"Toyota Tsusho India Pvt Ltd",
"Micromatic",
"Tata Motors - Sanand",
"Tata Motors - Pune",
"Tata Motors - DWR"
]

export default function InterviweForm(){
    return(
        <div className="row justify-content-center">
            <div className="col-9 ">
            <span className="header">Interview form</span>
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <label>Candidate Source</label>
                        <select>
                            {CandidateSrc.map((item)=>{
                                return <option>{item}</option>
                            })}
                        </select>
                    </div>
                    <div className="col-lg-6">
                    <label>Mode of Interview</label>
                        <select>
                            <option>Meeting</option>
                            <option>Telephonic</option>
                        </select>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <label><p>Documents Verified?</p>(DOB, Educational Certificates & Adhar Card)</label>
                        <select>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>
                    <div className="col-lg-6">
                    <label>Mode of Interview</label>
                        <select>
                            <option>Meeting</option>
                            <option>Telephonic</option>
                        </select>
                    </div>
                </div>
                <div>
                <label>Rate Candidates need for this program ?</label>
                    <Rating 
                        className= "need"
                    />
                </div>
                <div>
                <label>Financial Background</label>
                    <Rating 
                        className="financial"
                    />
                </div>
                <div>
                <label>Candidate can read / write English ?</label>
                    <Rating 
                        className="english"
                    />
                </div>
                <div>
                <label>Mathematics / Computing ?</label>
                    <Rating
                    className="mathe" />
                </div>
                <div>
                <label>General Knowledge ?</label>
                    <Rating
                    className="gk" />
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <label>IGNOU or Distance Education Status Explained ?</label>
                        <select>
                            <option>Accepted</option>
                            <option>Not Accepted</option>
                            <option>Already Student</option>
                        </select>
                    </div>
                    <div className="col-lg-6">
                    <label>Interview Result</label>
                        <select>
                            <option>Pass</option>
                            <option>Fail</option>
                            <option>Hold</option>
                            <option>Once Again Interview Scheduled</option>
                        </select>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <label>If Pass, Selected for Which Industry ?</label>
                        <select>
                            {Industry.map((item)=>{
                                return <option>{item}</option>
                            })}
                        </select>
                    </div>
                    <div className="col-lg-6">
                    <label>Remarks (if any)</label>
                        <input type="text" placeholder="Enter Your Answer"></input>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React from 'react'
import "./Form.css"

const Call_Type =["", "First Time", "Follow up", "Call Recieved", "Interview Follow up"]
const response=["",
    "Not Interested",
    "Underage",
    "Already Joined",
    "Overage",
    "Over Qualified",
    "To Join",
    "Convinced",
    "Rude Attitude",
    "Other Language Candidate",
    "Wrong / Invalid Number",
    "Waiting for Result",
    "Ringing / Switch Off / Not Reachable",
    "Interested",
    "Need Call Back",
    "Working",
    "Under Weight",
    "Good Financial Back ground",
    "Under Qualified",
    "Over Weight",
    "Home Sickness"]

const Qualification = ["",
        "ITI - General Mechanic",
        "ITI - Marine Fitter",
        "Pursuing ITI-Fitter/Turner/Machinist",
        "Pursuing Graduation",
        "ITI - Mechanic Machine Tools maintenance",
        "10th Pass",
        "ITI - Mechanic (Refrigeration & Air Conditioning)",
        "ITI - Technician Medical electronics",
        "12th Pass ( Arts )",
        "Pursuing Diploma in Mechanical Completed",
        "Diploma in Mechatronics",
        "Graduation Completed",
        "Any Other ITI ( Which is not in above)",
        "Diploma in Tool & Die Making",
        "Pursuing ITI - Electronic Mechanic",
        "ITI - Automotive Manufacturing",
        "ITI - Mechanic Motor Vehicle",
        "ITI-Fitter/Turner/Machinist Completed",
        "ITI - Instrument Mechanic",
        "ITI - Information & Communication Technology System Maintenance",
        "ITI - Mechanic Radio & Television",
        "ITI - Wiremen",
        "12th Pass ( Science )",
        "B.E./B.Tech",
        "ITI - Draftsmen (Mechanical)",
        "ITI - Tool & Die Maker (Press Tools, Jigs & Fixtures)",
        "ITI - Painter General",
        "12th Pass ( Commerce )",
        "Diploma in Electronics",
        "Pursuing ITI - Any Other Trade",
        "ITI - Any Other Trade Completed",
        "ITI - Maintenance Mechanic (Chemical Plant)",
        "Any Other Diploma ( Which is not in above)",
        "Pursuing 12th",
        "ITI - Electronic Mechanic Completed",
        "Diploma in Electrical",
        "ITI - Certificate Course in Machinist Tools Room",
        "ITI - Electrician Completed",
        "Pursuing ITI - Electrician",
        "Diploma in Mechanical Completed",
        "ITI - Technician Mechatronics",
        "ITI - Diesel Mechanic"]

const source= ["",
    "E-mail/ SMS / Missed Call",
    "FaceBook",
    "Friend & Relative",
    "Job Fair Data",
    "National Career Services",
    "News Paper Ad",
    "NTTF Staff",
    "NTTF Website",
    "Partner Industry",
    "You tube",
    "Walk In"]

export default function Form(){



    return(
        <div className="form-data ">
            <form>
        <div className="row justify-content-center">
        <span className="header">Call Form</span>
            <div className="col-lg-4">
                <label>Interested</label>
                <select>
                    <option>Yes</option>
                    <option>No</option>
                </select>

                <label>Student Name</label>
                <input type="text" placeholder="Enter Name"></input>

                <label>Mobile Number</label>
                <input type="text" placeholder="Enter Mobile Number"></input>

                <label>Call Type *</label>
                <select>
                    {Call_Type.map((items)=>{
                        return <option>{items}</option>
                    })}
                </select>

                <label>Pincode</label>
                <input type="text" />

            </div>
            <div className="col-lg-4">
            <label>Response *</label>
                <select>
                {response.map((item)=>{
                    return <option>{item}</option> 
                })}
                </select>

                <label>Qualification</label>
                <select>
                    {Qualification.map((item)=>{
                        return <option>{item}</option>
                    })}
                </select>

                <label>Year of Passing</label>
                <input type="number"/>

                <label>Source *</label>
                <select>
                    {source.map((item)=>{
                        return <option>{item}</option>
                    })}
                </select>

                <label>Aadhar Number</label>
                <input type="text" />

            </div>
        </div>
            <button>Submit</button>
            </form>

        </div>
    )
}
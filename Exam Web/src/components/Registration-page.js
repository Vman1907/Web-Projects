import React from "react";
import Card from "./card";
import Alert from "./aterl"
import Info from "./info";
import Navbar from "./navbar"

const Qualification = ["10th Pass", 
"12th Pass(Arts)", 
"12th Pass(Science)", 
"12th Pass(Commerce)",
"Pursuing 12th",
"Graduation-Arts-Persuing" ,
"Graduation-Arts-Completed", 
"Graduation-Commerce-Persuing", 
"Graduation-Commerce-Completed", 
"Graduation-Science-Pursuing", 
"Graduation-Science-Completed",
"Any Other Graduation(Which od not in above)" ,
"ITI-Fitter/Tuner/Machinist Completed",
"Pursuing ITI-Fitter/Tuner/Machinist",
"ITI -Electronic Mechanic Completed",
" Pursuing ITI -Electronic Mechanic",
"ITI-Electrician Completed",
"Pursuing ITI-Electrician",
"ITI-Automotive Manufacturing",
"ITI-Certificate Cource in Machinist Teels Room",
"ITI-Diesel Mechanic",
"ITI-Draftsmen(Mechanic)",
"ITI-General Mechanic",
"ITI-Infirmation & Communication Techonology System Maintenance",
"ITI-Instument Mechanic",
"ITI-Maintenence Mechanic(Chamical Plant)",
"ITI-Marine Fitter",
"ITI-Mechanic Machine Tools maintenence",
"ITI-Mechanic Motor Vehical",
"ITI-Mechanic Radio & Television",
"ITI-Mechanic (Refrigeration & Air Conditioning",
"ITI-Painter General",
"ITI-Techinician Mechatronics",
"ITI-Medical Electronics",
"ITI-Tool & Die Maker (Press Tools, Jigs & Fixtures)",
"Any Other ITI(Which is not on above)",
"Pursuing ITI - Any Other Trade",
"Diploma in Mechatronics",
"Diploma in Tools & Die Making",
"Diploma in Mechanical completed",
"Any Other Diploma Pursuing(Which is not in above)",
"Any Other Diploma Completed (Which is not in above) ",
"B.E./B.Tech - Pursuing",
"B.E./B.Tech - Completed"
]

function Registration(){
    return(<div>
        <Navbar 
            logo="Logo"
            profileName = "anyone"
        />
        <div className="row">
        <div className="col-lg-4">
            <Card 
                header= ""
                content="test content"
            />
            <Card 
                header= "Notice!"
                content= "test content"
            />
            <Card 
                header= "Contact us"
                content= "test content"
            />
            <Card 
                header= "Ask anything"
                content= "test content"
            />
        </div>
        <div className="col-lg-7">
            <Alert 
                alertMessage= "this is an alert"
            />
            <Alert 
                alertMessage= "this is another alert for longer texts"
            />
            <Info
                header="Take the test now!"
                time="Time 1hour"
                info="Question 100"
                about="Before starting the exam please read all the instruction properly !"
            />
            <Info
                header="Interview!"
                time="Time 1hour"
                info="22 September 2012"
                about="Before starting the exam please read all the instruction properly !"
            />
            <Info
                header="Download your Offerletter"
                time=""
                info=""
                about="for the futher process please contact you incharge. If not able to download or mistake in offerletter contact administrator!"
            />
        </div>
        </div>
        </div>
    )
}

export default Registration;
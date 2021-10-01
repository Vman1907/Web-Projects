import Image from "./Rectangle 274.png"
import "./Addon.css"

export default function Addon(){
    return(
        <div className="container">
        <div className="row">
            <div className="col-lg-5 col-sm-12">
                <img src={Image} alt=""/>
            </div>
            <div className="col-lg-6 col-sm-12">
                <ul>
                    <li>No. 1 Website For Fresher</li>
                    <li>No Registration charge</li>
                    <li>No Fee</li>
                    <li>Eligible Candidate</li>
                    <li>10th pass</li>
                    <li>12th pass</li>
                    <li>ITI</li>
                    <li>Diploma program</li>
                </ul>
            </div>
        </div>
        </div>
    )
}
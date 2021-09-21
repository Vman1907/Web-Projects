import React from 'react'
import "./Report.css"

export default function Report(){
    return(
        <div className="report">
        <span className="header">Report Panel</span>
            <div className="row">
                <div className="col-lg-3">
                    <div>Exam Wise</div>
                </div>
                <div className="col-lg-3">
                    <div>Interview Wise</div>
                </div>
                <div className="col-lg-3">
                    <div>Offer-letter Wise</div>
                </div>
                <div className="col-lg-3">
                    <div>Joining Wise</div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <div>State Wise</div>
                </div>
                <div className="col-lg-3">
                    <div>Company Wise</div>
                </div>
                <div className="col-lg-3">
                    <div>Source Wise</div>
                </div>
                <div className="col-lg-3">
                    <div>Call Wise</div>
                </div>
            </div>
        </div>
    )
}
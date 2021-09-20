import React, { useState } from 'react'
import "./Dashboard.css"

export default function Dashboard(){

    const [data, setData] = useState({
        registration:"400",
        exam:"210",
        interview:"100",
        offer_letter:"10",
        joining:"2"
    })

    return(
        <div className="dashboard-wrapper">
        <span>Dashboard</span>
        <span>Today</span>
            <div className="row content-wrapper">
                <div className="col-2">
                    <span>Registration</span>
                    <span>{data.registration}</span>
                </div>
                <div className="col-2">
                    <span>Exam</span>
                    <span>{data.exam}</span>
                </div>
                <div className="col-3">
                    <span>Interview</span>
                    <span>{data.interview}</span>
                </div>
                <div className="col-3">
                    <span>Offer-letter issued</span>
                    <span>{data.offer_letter}</span>
                </div>
                <div className="col-2">
                    <span>Joining</span>
                    <span>{data.joining}</span>
                </div>
            </div>
        </div>
    )
}
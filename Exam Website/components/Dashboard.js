import React from 'react'
import Info from './InfoTiles'
import GreenLogo from "./phone.png"

export default function Dashboard(){
    return(
        <div className="row">
            <div className="col-lg-2">

            </div>
            <div className="col-lg-10 dashboard">
                    <div className="row">
                        <div className="col-4">
                                <Info
                                     title="Call Target"
                                     data="309"
                                     icon={GreenLogo}
                             />
                        </div>
                        <div className="col-4">
                                <Info
                                     title="Call Attended"
                                     data="309"
                             />
                        </div>
                        <div className="col-4">
                                <Info
                                     title="Call Left"
                                     data="309"
                             />
                        </div>
                    </div>
            </div>
        </div>
    )
}
import React, {useState} from "react";
import {ProSidebar, Menu, MenuItem, SidebarHeader} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';

const Dashboard=({handleClick})=>{

    

    return(
<ProSidebar>
    <Menu iconShape="square">
        <MenuItem onClick={(e)=>{handleClick("dashboard")}}>Dashboard</MenuItem>
        <MenuItem onClick={(e)=>{handleClick("student")}}>Student</MenuItem>
        <MenuItem onClick={(e)=>{handleClick("examination")}}>Examination</MenuItem>
        <MenuItem onClick={(e)=>{handleClick("interview")}}>Interview</MenuItem>
        <MenuItem onClick={(e)=>{handleClick("offerletter")}}>Offer-Letter</MenuItem>
        <MenuItem onClick={(e)=>{handleClick("statistics")}}>Statistics</MenuItem>
    </Menu>
</ProSidebar>
    
    )
}

export default Dashboard;
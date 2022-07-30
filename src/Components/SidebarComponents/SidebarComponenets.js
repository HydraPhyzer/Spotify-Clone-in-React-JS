import React from 'react'
import './SidebarComponenets.css'
import { useDispatch } from 'react-redux';
import {SETSINGLEPLAYLISTID} from '../Redux/Actions'

const SidebarComponenets = ({ Title, Icon, PID }) => {
    let Dispatch=useDispatch();

    return (
        <div className='SidebarComponents'>
            {Icon?<Icon className="SidebarIcon" />:""}
            <h6 onClick={()=>{Dispatch(SETSINGLEPLAYLISTID(PID))}}>{Title}</h6>
        </div>
    )
}

export default SidebarComponenets
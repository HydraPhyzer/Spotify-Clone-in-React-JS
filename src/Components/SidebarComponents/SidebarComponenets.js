import React from 'react'
import './SidebarComponenets.css'

const SidebarComponenets = ({ Title, Icon }) => {
    return (
        <div className='SidebarComponents'>
            {Icon?<Icon className="SidebarIcon" />:""}
            <h6>{Title}</h6>
        </div>
    )
}

export default SidebarComponenets
import React from 'react'
import './Body.css'
import Navbar from '../Navbar/Navbar'
import { useSelector } from 'react-redux'

const Body = () => {
  let State=useSelector((state)=>
  {
    return state.Reducer;
  })
  let Target=State.SinglePlaylist;

  return (
    <div className='Body'>
      <Navbar/>

{
  console.log(Target)
}
      {Object.keys(Target).length>0?
        <div className="BelowNav">
        <div className="Playlist">
          <div className="Image">
          <img src={Target?.images[0]?.url} alt="" />
          </div>

          <div className="Details">
            <div className="PlaylistInfo">
              <p className='Line1'>PLAYLIST</p>
            </div>

            <div className="PlaylistName">
              <h1>{Target.name}</h1>
            </div>

            <div className="Info">
              <h6 className='Line2'>{Target.description}</h6>
              <p>
                <span>{Target.owner? Target.owner.display_name:""} . </span>
                <span className='Count'>{Target.tracks? Target.tracks.total:""} Songs</span>
                </p>
            </div>
          </div>
        </div>
      </div>:""}
    </div>
  )
}

export default Body
import React from 'react'
import './Body.css'
import Navbar from '../Navbar/Navbar'
import { useSelector } from 'react-redux'

const Body = () => {
  let State=useSelector((state)=>
  {
    return state.Reducer;
  })

  return (
    <div className='Body'>
      <Navbar/>

      <div className="BelowNav">
        <div className="Playlist">
          <div className="Image">
            {State.Playlist.items?<img src={State.Playlist.items[2].images[0].url} alt="" />:""}
          </div>

          <div className="Details">
            <div className="PlaylistInfo">
              <p className='Line1'>PLAYLIST</p>
            </div>

            <div className="PlaylistName">
              <h1>My Savage</h1>
            </div>

            <div className="Info">
              <h6 className='Line2'>Born To Shine</h6>
              <p>
                <strong>ZUBAIR GUJJAR . </strong>
                319 Songs
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body
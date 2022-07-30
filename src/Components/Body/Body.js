import React from 'react'
import './Body.css'
import Navbar from '../Navbar/Navbar'
import { useSelector } from 'react-redux'
import Song from '../EachSong/Song'

const Body = () => {
  let State=useSelector((state)=>
  {
    return state.Reducer;
  })
  let Target=State.SinglePlaylist;
  return (
    <div className='Body'>
      <Navbar/>

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


        <div className="Songs">
          {
            Target.tracks.items.map((Item,In)=>
            {
              return(
                <Song Index={In} Image={Item?.track?.album?.images[0]?.url} Length={Item.track.duration_ms} Datez={Item.added_at} Album={Item.track.album.name} Singer={Item.track.artists[0].name} Name={Item.track.name} key={In} ID={Item.track.id}/>
            )})
          }
        </div>

      </div>:""}

      {/* {
        console.log(Target.tracks.items)
      } */}

    </div>
  )
}

export default Body
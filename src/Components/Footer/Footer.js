import React from 'react'
import './Footer.css'
import PlayCircleIcon from '@material-ui/icons/PlayCircleFilled';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNext from '@material-ui/icons/SkipNext';
import Shuffle from '@material-ui/icons/Shuffle';
import Replay from '@material-ui/icons/Replay';
import VolumeUp from '@material-ui/icons/VolumeUp';
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
const Footer = () => {


  let State = useSelector((Stat) => {
    return Stat.Reducer
  })

  let Track = State.Track

  {
    console.log(Track)
  }

  return (
    <div className='Footer'>

      {
        Object.keys(Track).length > 0 ?
          <div className="Current">
            <img src={Track.album.images[0].url} alt="" />

            <div className="CurrentInfo">
              <div className="Name">
                {Track.name}
              </div>
              <div className="AlbumName">
                {
                  Track?.artists[0]?.name
                }
              </div>
            </div>
          </div> : ""
        }

      <div className="Controls">
        <Shuffle />
        <SkipPreviousIcon />
        <PlayCircleIcon className='PlayerIcon' />
        <SkipNext />
        <Replay />
      </div>

      <div className="Volums">
        <VolumeUp />
        <input className='Slider' type="range" />
      </div>
    </div>
  )
}

export default Footer
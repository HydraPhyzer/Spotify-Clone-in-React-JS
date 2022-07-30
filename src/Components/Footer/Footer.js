import React from 'react'
import './Footer.css'
import PlayCircleIcon from '@material-ui/icons/PlayCircleFilled';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNext from '@material-ui/icons/SkipNext';
import Shuffle from '@material-ui/icons/Shuffle';
import Replay from '@material-ui/icons/Replay';
import VolumeUp from '@material-ui/icons/VolumeUp';
import Slider from '@material-ui/core/Slider'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="Current">
        <img src="/Logo/Daily.webp" alt="" />

        <div className="CurrentInfo">
          <div className="Name">
            Trying to Say
          </div>
          <div className="AlbumName">
            Hello World
          </div>
        </div>
      </div>

      <div className="Controls">
        <Shuffle />
        <SkipPreviousIcon />
        <PlayCircleIcon className='PlayerIcon'/>
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
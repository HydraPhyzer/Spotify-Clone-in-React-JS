import React, { useState ,useContext} from 'react'
import './Song.css'
import PlayArrow from '@material-ui/icons/PlayArrow';
import {PlayerContext} from '../Player/Player'
import { useDispatch } from 'react-redux';
import { SETTRACK } from '../Redux/Actions';

const Song = ({ID,Index,Image ,Length,Datez,Album,Singer,Name}) => {
    let Dispatch=useDispatch();

    let Spotify=useContext(PlayerContext)
    let Dates=new Date(Datez);
    let Min=Math.floor( (Length/1000)/60);
    let MSec=(+(((Length/1000)/60).toString().split(".")[1]))
    let Sec=(MSec*60).toFixed(2).slice(0,2);

    let [Over,setOver]=useState(false);


    let Mouse1=()=>
    {
        setOver(true)
    }
    let Mouse2=()=>
    {
        setOver(false)
    }
  return (
    <div className='Song' onMouseLeave={()=>{Mouse2()}} onMouseEnter={()=>{Mouse1()}}>
        <div className="Title">
            <div className="Index">
                {
                    Over===true?<PlayArrow onClick={()=>{
                        Spotify.getTrack(ID).then((Track)=>
                        {
                            console.log(Spotify.play())
                            Dispatch(SETTRACK(Track))
                        })
                    }}/>:Index
                }
            </div>
            <img src={Image} alt="" />

            <div className="Song-Info">
                <div className="Name">{Name}</div>
                <div className="Singer">{Singer}</div>
            </div>
        </div>

        <div className="Album">
            {Album}
        </div>

        <div className="Date">
            {Dates.toDateString().substring(4)}
        </div>

        <div className="Duration">
            {`${Min}:${Sec}`}
        </div>
    </div>
  )
}

export default Song
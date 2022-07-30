import React from 'react'
import './Song.css'

const Song = ({Index,Image ,Length,Datez,Album,Singer,Name}) => {
    let Dates=new Date(Datez);
    let Min=Math.floor( (Length/1000)/60);
    let MSec=(+(((Length/1000)/60).toString().split(".")[1]))
    let Sec=(MSec*60).toFixed(2).slice(0,2);
  return (
    <div className='Song'>
        <div className="Title">
            <div className="Index">{Index}</div>
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
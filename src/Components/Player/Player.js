import React, { useEffect } from 'react'
import './Player.css'
import Sidebar from '../Sidebar/Sidebar'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'
import { useSelector } from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-js'
import {SETUSER,SETPLAYLIST} from '../Redux/Actions'
import {useDispatch} from 'react-redux'

let Spotify=new SpotifyWebApi();
const Player = () => {
  let Dispatch=useDispatch();
  let State=useSelector((state)=>
  {
    return state.Reducer;
  });

  useEffect(()=>
  {
    Spotify.setAccessToken(State.Token);

    Spotify.getMe().then((User)=>
    {
      Dispatch(SETUSER(User));
    })

    Spotify.getUserPlaylists(State.User.id).then((Playlist)=>
    {
      Dispatch(SETPLAYLIST(Playlist));
    })

  },[])

  return (
    <div className='Player'>

      <div className="Main">
        <Sidebar/>
        <Body/>
      </div>
      <Footer/>
    </div>
  )
}

export default Player
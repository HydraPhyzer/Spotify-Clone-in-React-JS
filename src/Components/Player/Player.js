import React, { useEffect,createContext, useContext } from 'react'
import './Player.css'
import Sidebar from '../Sidebar/Sidebar'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'
import { useSelector } from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-js'
import {SETUSER,SETPLAYLIST, SETSINGLEPLAYLIST,SETSINGLEPLAYLISTID } from '../Redux/Actions'
import {useDispatch} from 'react-redux'

let Spotify=new SpotifyWebApi();
let PlayerContext=createContext();
const Player = ({children}) => {
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

    Dispatch((SETSINGLEPLAYLISTID("6yMHdDE3Uo7NUNm75o22G5")))

  },[])

  useEffect(()=>
  {
    Spotify.getPlaylist(State.SinglePlaylistID).then((Play)=>
    {
      Dispatch(SETSINGLEPLAYLIST(Play))
    })
  },[State.SinglePlaylistID])

  return (
    <div className='Player'>
      <PlayerContext.Provider value={Spotify}>

        <div className="Main">
        {children}
          <Sidebar/>
          <Body/>
        </div>
        <Footer/>
      </PlayerContext.Provider>
    </div>
  )
}

export {Player,PlayerContext}
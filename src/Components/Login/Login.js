import React from 'react'
import './Login.css'
import {LogInURL } from '../Spotify'

const Login = () => {

  return (
    <div className='Login'>
      <div className="Image">
        <img src="./Logo/OnScreenLogo.jpg" alt="" />
      </div>

      <a href={LogInURL}>Login With Spotify</a>
    </div>
  )
}

export default Login
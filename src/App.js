import React, { useState, useEffect } from 'react'
import './App.css';
import Login from './Components/Login/Login';
import { GetToken } from './Components/Spotify';
import Player from './Components/Player/Player';

const App = () => {

  let [Token, setToken] = useState("");

  useEffect(() => {
    let X = GetToken();
    window.location.hash = "";

    if (X.a) {
      setToken(X.a);
    }
  }, [])

  return (
    <div>
      {Token ? <Player /> : <Login />}

    </div>
  )
}

export default App
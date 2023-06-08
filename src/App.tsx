import { useState } from 'react'
import speaker from './assets/speaker.png'
import './App.scss'
import TitleBar from './components/TitleBar/TitleBar'

function App() {

  return (
    <>
      <div className="app-container">
        <div className="spotify-container">
          <div className="spotify-title-bar">
            {/* <img className="s" src={speaker} alt="Speaker logo" /> */}
            <TitleBar icon={speaker} name="Spotify"></TitleBar>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

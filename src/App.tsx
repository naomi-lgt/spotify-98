import { useState } from 'react'
import speaker from './assets/speaker.png'
import './App.scss'
import TitleBar from './components/TitleBar/TitleBar'
import NavigationButton from './components/NavigationButton/NavigationButton'

function App() {

  return (
    <>
      <div className="app-container">
        <div className="spotify-container">
          <div className="spotify-title-bar">
            <TitleBar icon={speaker} name="Spotify"></TitleBar>
          </div>
          <div className="spotify-main-container">
            <div className="spotify-left-side">
              <div className="left-side-navigation">
                <NavigationButton icon={speaker} name="Home"></NavigationButton>
                <hr />
                
              </div>
              <hr />
              <div className="left-side-playlist">

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

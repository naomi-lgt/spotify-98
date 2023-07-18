import { useState } from 'react'
import speaker from './assets/speaker.png'
import home from './assets/buttons/home.png'
import search from './assets/buttons/search.png'
import library from './assets/buttons/library.png'
import createPlaylist from './assets/buttons/create-playlist.png'
import episodes from './assets/buttons/episodes.png'
import './App.scss'
import TitleBar from './components/TitleBar/TitleBar'
import NavigationButton from './components/NavigationButton/NavigationButton'
import { NavigationButtonInterface } from './models/NavigationButtonInterface'

function App() {

  const mainNavigationButtonsArray: Array<NavigationButtonInterface> = [
    {
      icon: home,
      name: 'Home'
    },
    {
      icon: search,
      name: 'Search'
    },
    {
      icon: library,
      name: 'Your Library'
    }
  ]

  const userNavigationButtonsArray: Array<NavigationButtonInterface> = [
    {
      icon: createPlaylist,
      name: 'Create Playlist'
    },
    {
      icon: speaker,
      name: 'Liked Songs'
    },
    {
      icon: episodes,
      name: 'Your Episodes'
    },
  ]

  // const routesArray: Array<any> = [
  //   { path: '', component: }
  // ]

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
                <div className="main-navigation">
                  {mainNavigationButtonsArray.map((nav, key) => {
                    return (<NavigationButton icon={nav.icon} name={nav.name} key={key}></NavigationButton>)
                  })}
                </div>
                <hr />
                <div className="user-navigation">
                  {userNavigationButtonsArray.map((nav, key) => {
                    return (<NavigationButton icon={nav.icon} name={nav.name} key={key}></NavigationButton>)
                  })}
                </div>
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

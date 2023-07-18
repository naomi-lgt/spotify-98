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
import { RoutingButtonInterface } from './models/RoutingButtonInterface'
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home'
import Search from './pages/Search/Search'
import Library from './pages/Library/Library'
import CreatePlaylist from './pages/CreatePlaylist/CreatePlaylist'
import LikedSongs from './pages/LikedSongs/LikedSongs'
import Episodes from './pages/Episodes/Episodes'

function App() {

  const mainNavigationButtonsArray: Array<RoutingButtonInterface> = [
    {
      icon: home,
      name: 'Home',
      path: '/'
    },
    {
      icon: search,
      name: 'Search',
      path: '/search'
    },
    {
      icon: library,
      name: 'Your Library',
      path: '/library'
    }
  ]

  const userNavigationButtonsArray: Array<RoutingButtonInterface> = [
    {
      icon: createPlaylist,
      name: 'Create Playlist',
      path: '/create-playlist'
    },
    {
      icon: speaker,
      name: 'Liked Songs',
      path: '/liked-songs'
    },
    {
      icon: episodes,
      name: 'Your Episodes',
      path: '/episodes'
    },
  ]

  // const routesArray: Array<any> = [
  //   { path: '/home', component: }
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
                    return (<NavigationButton icon={nav.icon} name={nav.name} path={nav.path} key={key}></NavigationButton>)
                  })}
                </div>
                <hr />
                <div className="user-navigation">
                  {userNavigationButtonsArray.map((nav, key) => {
                    return (<NavigationButton icon={nav.icon} name={nav.name} path={nav.path} key={key}></NavigationButton>)
                  })}
                </div>
              </div>
              <hr />
              <div className="left-side-playlist">

              </div>
            </div>
            <div className="spotify-right-side">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/search" element={<Search />} />
              <Route path="/library" element={<Library />} />
              <Route path="/create-playlist" element={<CreatePlaylist />} />
              <Route path="/liked-songs" element={<LikedSongs />} />
              <Route path="/episodes" element={<Episodes />} />
            </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

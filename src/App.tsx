import { useEffect, useState } from 'react'
import speaker from './assets/speaker.png'
import './App.scss'
import TitleBar from './components/TitleBar/TitleBar'
import NavigationButton from './components/NavigationButton/NavigationButton'
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
import Player from './components/Player/Player'
import {mainNavigationButtonsArray, userNavigationButtonsArray} from './fixedData'

function App() {

  const [token, setToken] = useState('');

    useEffect(() => {
        async function getToken() {
            const response = await fetch('http://localhost:3333/auth/token');
            const json = await response.json();
            console.log(json)
            setToken(json.access_token);
        }

        getToken();
    }, []);

  return (
    <>
      <div className="app-container">
        <div className="spotify-container border">
          <div className="spotify-title-bar">
            <TitleBar icon={speaker} name="Spotify"></TitleBar>
          </div>
          <div className="spotify-main-container">
            <div className="spotify-left-right-container">
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
                <Route path="/" element={<Home token={token} />} />
                <Route path="/search" element={<Search />} />
                <Route path="/search" element={<Search />} />
                <Route path="/library" element={<Library />} />
                <Route path="/create-playlist" element={<CreatePlaylist />} />
                <Route path="/liked-songs" element={<LikedSongs />} />
                <Route path="/episodes" element={<Episodes />} />
              </Routes>
              </div>
            </div>
            <div className="spotify-player-block border">
              <Player></Player>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

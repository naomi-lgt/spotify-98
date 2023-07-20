import speaker from './assets/speaker.png'
import home from './assets/buttons/home.png'
import search from './assets/buttons/search.png'
import library from './assets/buttons/library.png'
import createPlaylist from './assets/buttons/create-playlist.png'
import episodes from './assets/buttons/episodes.png'
import backward from './assets/player/backward.png'
import cursor from './assets/player/cursor.png'
import forward from './assets/player/forward.png'
import loop from './assets/player/loop.png'
import play from './assets/player/play.png'
import shuffle from './assets/player/shuffle.png'
import song from './assets/player/song.png'
import volume from './assets/player/volume.png'
import { RoutingButtonInterface } from './models/RoutingButtonInterface'
import { ButtonInterface } from './models/ButtonInterface'

export const mainNavigationButtonsArray: Array<RoutingButtonInterface> = [
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

export const userNavigationButtonsArray: Array<RoutingButtonInterface> = [
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

export const buttonDataArray: Array<ButtonInterface> = [
    {
        icon: shuffle,
        alt: 'Shuffle'
    },
    {
        icon: backward,
        alt: 'Backward'
    },
    {
        icon: play,
        alt: 'Play'
    },
    {
        icon: forward,
        alt: 'Forward'
    },
    {
        icon: loop,
        alt: 'Loop'
    },
]


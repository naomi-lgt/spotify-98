import './Player.scss';
import songIcon from '../../assets/player/song.png'
import volume from '../../assets/player/volume.png'
import {buttonDataArray} from '../../fixedData'
import Button from '../Button/Button';
import { useState, useEffect } from 'react';

function Player({token} : any) {
    const [volumeSlider, setVolumeSlider] = useState(0.3);
    const handleVolume = (e: any) => {
        setVolumeSlider(Number(e.target.value));

        if (player) {
            player.setVolume(Number(e.target.value))
            player.getVolume()
        }
    }
    const [player, setPlayer] = useState<Spotify.Player | undefined>(undefined);
    const [is_paused, setPaused] = useState(false);
    const [is_active, setActive] = useState(false);
    const [duration, setDuration] = useState(0);
    const [position, setPosition] = useState(0);

    
    
    const [current_track, setTrack] = useState<Spotify.Track | undefined>(undefined);

    
    useEffect(() => {

        const script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;
    
        document.body.appendChild(script);
    
        window.onSpotifyWebPlaybackSDKReady = () => {
    
            const player = new window.Spotify.Player({
                name: 'Web Playback SDK',
                getOAuthToken: cb => { cb(token); },
                volume: volumeSlider
            });
    
            player.addListener('ready', ( device_id ) => {
                console.log('Ready with Device ID', device_id);
            });
    
            player.addListener('not_ready', ( device_id ) => {
                console.log('Device ID has gone offline', device_id);
            });

            player.setName("Spotify 98").then(() => {
                console.log('Player name updated!');
              });
    
    
            player.connect().then((success) => {
                if (success) {
                  console.log('The Web Playback SDK successfully connected to Spotify!');
                }
            })

            setPlayer(player);

            player.addListener('player_state_changed', ( (state: any) => {

                if (!state) {
                    return;
                }

                setTrack(state.track_window.current_track);
                setPaused(state.paused);
                setDuration(state.duration)
            
            
                player.getCurrentState().then( (state: any) => { 
                    (!state)? setActive(false) : setActive(true) 
                });
            
            }));
            
        };
    }, []);
    
    return (
        <div className="player-container">
            <div className="player-song-info">
                <div className="song-icon active-border">
                    <img src={songIcon} alt="Song icon" />
                </div>
                <div className="song-details">
                    {
                        current_track ? 
                        <>
                            <h1>{current_track.name.length > 0 ? current_track.name : 'Song title'}</h1>
                            <h2>{current_track.artists[0].name.length > 0 ? current_track.artists[0].name : 'Song artist'}</h2>
                        </>
                        :
                        <>
                            <span>aaaaaaah</span>
                        </>
                    }
                </div>
            </div>
            <div className="player-main">
                <div className="song-buttons">
                    {buttonDataArray.map((btn, key) => {
                        return (<Button icon={btn.icon} alt={btn.alt} key={key}></Button>)
                    })}
                </div>
                <div className="song-length">
                    <span className="length-start">{position / 1000}</span>
                        <input type="range" id="song-slider" name="song-slider" min="0" max="100" className="length-player range-slider"></input>
                    <span className="length-end">{duration / 1000}</span>
                </div>
            </div>
            <div className="player-volume">
                <img className="volume-icon" src={volume} alt="Change volume" onClick={() => setVolumeSlider(0)}/>
                <input type="range" id="song-slider" name="song-slider" min="0" max="1" step="0.01" value={volumeSlider} className="volume-slider range-slider" onChange={(e) => handleVolume(e)}></input>
            </div>
        </div>
    )
}

export default Player

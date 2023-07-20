import './Player.scss';
import songIcon from '../../assets/player/song.png'
import volume from '../../assets/player/volume.png'
import {buttonDataArray} from '../../fixedData'
import Button from '../Button/Button';
import { useState } from 'react';

function Player() {
    const [volumeSlider, setVolumeSlider] = useState(50);
    const handleVolume = (e: any) => {
        setVolumeSlider(e.target.value)
    }
    return (
        <div className="player-container">
            <div className="player-song-info">
                <div className="song-icon active-border">
                    <img src={songIcon} alt="Song icon" />
                </div>
                <div className="song-details">
                    <h1>Song title</h1>
                    <h2>Song artist</h2>
                </div>
            </div>
            <div className="player-main">
                <div className="song-buttons">
                    {buttonDataArray.map((btn, key) => {
                        return (<Button icon={btn.icon} alt={btn.alt} key={key}></Button>)
                    })}
                </div>
                <div className="song-length">
                    <span className="length-start">0:00</span>
                        <input type="range" id="song-slider" name="song-slider" min="0" max="100" className="length-player range-slider"></input>
                    <span className="length-end">3:00</span>
                </div>
            </div>
            <div className="player-volume">
                <img className="volume-icon" src={volume} alt="Change volume" onClick={() => setVolumeSlider(0)}/>
                <input type="range" id="song-slider" name="song-slider" min="0" max="100" value={volumeSlider} className="volume-slider range-slider" onChange={(e) => handleVolume(e)}></input>
            </div>
        </div>
    )
}

export default Player

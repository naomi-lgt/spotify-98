import './Player.scss';
import songIcon from '../../assets/player/song.png'
import cursor from '../../assets/player/cursor.png'
import volume from '../../assets/player/volume.png'
import {buttonDataArray} from '../../fixedData'
import Button from '../Button/Button';

function Player() {
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
                        <div className="length-player range-slider">
                            <img src={cursor} alt="Player slider" />
                        </div>
                    <span className="length-end">3:00</span>
                </div>
            </div>
            <div className="player-volume">
                <img className="volume-icon" src={volume} alt="Change volume" />
                <div className="volume-slider range-slider">
                    <img src={cursor} alt="Volume slider" />
                </div>
            </div>
        </div>
    )
}

export default Player
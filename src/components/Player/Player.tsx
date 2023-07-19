import './Player.scss';
import songIcon from '../../assets/player/song.png'
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
                        return (
                            <Button icon={btn.icon} alt={btn.alt} key={key}></Button>
                        )
                    })}

                </div>
                <div className="song-length">

                </div>
            </div>
            <div className="player-volume"></div>
        </div>
    )
}

export default Player
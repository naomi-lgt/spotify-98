import { TitleBarInterface } from '../../models/TitleBarInterface'
import './TitleBar.scss'
import minimize from '../../assets/title-bar/minimize.png'
import maximize from '../../assets/title-bar/maximize.png'
import close from '../../assets/title-bar/close.png'

function TitleBar({icon, name}: TitleBarInterface) {

    return (
        <>
            <div className="title-bar-container">
                <div className="title-bar-left">
                    <img src={icon} alt="" />
                    <span>{name}</span>
                </div>
                <div className="title-bar-right">
                    <div className="title-bar-button minimize">
                        <img src={minimize} alt="" />
                    </div>
                    <div className="title-bar-button maximize">
                        <img src={maximize} alt="" />
                    </div>
                    <div className="title-bar-button close">
                        <img src={close} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TitleBar
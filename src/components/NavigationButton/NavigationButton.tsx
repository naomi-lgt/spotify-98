import { NavigationButtonInterface } from "../../models/NavigationButtonInterface";
import './NavigationButton.scss';

function NavigationButton({icon, name}: NavigationButtonInterface) {
    return (
        <div className="navigation-button">
            <img src={icon} alt="" />
            <span>{name}</span>
        </div>
    )
}

export default NavigationButton
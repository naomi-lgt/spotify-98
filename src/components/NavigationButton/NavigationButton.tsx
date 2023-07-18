import { NavLink } from "react-router-dom";
import { RoutingButtonInterface } from "../../models/RoutingButtonInterface";
import './NavigationButton.scss';

function NavigationButton({icon, name, path}: RoutingButtonInterface) {
    return (
        <NavLink to={path}>
            {({ isActive }) => (
                <div className={isActive ? 'navigation-button active' : 'navigation-button'}>
                    <img src={icon} alt="" />
                    <span>{name}</span>
                </div>
            )}
        </NavLink>
    )
}

export default NavigationButton
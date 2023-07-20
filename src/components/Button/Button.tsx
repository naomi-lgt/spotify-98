import { useState } from 'react';
import { ButtonInterface } from '../../models/ButtonInterface';
import './Button.scss';

function Button({icon, alt}: ButtonInterface) {
    const [clickedButton, setClickedButton] = useState(false);
    const iconName = icon.slice(19, -4)

    return (
        <div className={`button-container ${clickedButton ? 'active-border' : 'border'}`} onClick={() => setClickedButton(!clickedButton)}>
            <img className={iconName} src={icon} alt={alt} />
        </div>
    )
}

export default Button
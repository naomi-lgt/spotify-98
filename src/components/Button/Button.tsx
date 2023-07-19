import { ButtonInterface } from '../../models/ButtonInterface';
import './Button.scss';

function Button({icon, alt}: ButtonInterface) {
    return (
        <div className="button-container border">
            <img src={icon} alt={alt} />
        </div>
    )
}

export default Button
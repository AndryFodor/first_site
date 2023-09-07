import { NavLink } from 'react-router-dom';
import s from './Header.module.css';


const Header = props => {
    return(
        <header className={s.header}>
            <img src='https://e7.pngegg.com/pngimages/949/715/png-clipart-bmp-file-format-file-formats-bitmap-studio-one-icon-image-file-formats-trademark.png' alt='logo'></img>
            <div className={s.auth_block}>
                {props.isAuth ?
                    props.login :
                    <NavLink to={'/auth'}>login</NavLink>
                }
                
            </div>
        </header>
    );
}

export default Header;
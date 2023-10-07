import { NavLink } from 'react-router-dom';
import s from './Header.module.css';


const Header = props => {
    return(
        <header className={s.header}>
            <img src='https://e7.pngegg.com/pngimages/949/715/png-clipart-bmp-file-format-file-formats-bitmap-studio-one-icon-image-file-formats-trademark.png' alt='logo'></img>
            <div className={s.auth_block}>
                {props.isAuth ? <Logged login = {props.login} LogOutThC = {props.LogOutThC}/>:
                    <NavLink to={'/login'}>login</NavLink>
                }
                
            </div>
        </header>
    );
}

const Logged = (props) => {
    return (
        <span>
            {props.login}
            <div onClick={props.LogOutThC}>log out</div>
        </span>
    )
}

export default Header;
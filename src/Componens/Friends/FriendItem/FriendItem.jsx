import s from './FriendItem.module.css'
import { NavLink } from "react-router-dom"


const FriendItem = props => {

    let path = `/friends/${props.id}`

    return(
        <div className={s.mainWrapper}>
            <NavLink to={path}>
                <img src={props.logo} alt={props.alt} />
                <p>{props.name}</p>
            </NavLink>
        </div>
    );
}

export default FriendItem;
import { NavLink } from 'react-router-dom'
import s from './FriendLink.module.css'

const FriendLink = props =>{

    let path = `/friends/${props.id}`
    return(
        <section className={s.mainWrapper}>
                <NavLink to={path} className={navData =>navData.isActive?s.activeLink :  s.notActive}>
                    <img src={props.logo} alt={props.alt} />
                    <p>{props.name}</p>
                </NavLink>
        </section>
    )
}

export default FriendLink;
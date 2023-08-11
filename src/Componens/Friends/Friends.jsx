import FriendItem from "./FriendItem/FriendItem";
import s from './Friends.module.css';

const Friends = props =>{

    let resultFriends = props.FriendsData.map(el => {
        return(
            <div className={s.element}>
                <FriendItem id = {el.id} name = {el.name} logo = {el.img} alt = {el.alt} />
            </div>
        )
    })

    return(
        <div>
            <p className={s.title}>Your Friend List</p>
            <div className={s.mainWrapper}>
                {resultFriends}
            </div>
            
        </div>
    )
}

export default Friends;
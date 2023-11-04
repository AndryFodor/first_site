import s from './Users.module.css'
import dUserPhoto from '../../assets/images/defaultUser.png'
import { NavLink } from "react-router-dom";

const User = ({ID, photos, followed, followingIsFetching, FollowingThunkCreator, name, status}) => <section className={s.mainContainer}>
    <div className={s.gridContainer}>
        <div className={s.item1}>
            <NavLink to={`/profile/${ID}`}>
                <img src={photos.small != null ? photos.small : dUserPhoto} alt={'user_Photo'} />
            </NavLink>
            {followed ?
                <button disabled={followingIsFetching.some(id => id === ID)} onClick={() => {
                    FollowingThunkCreator(ID, 'delete');
                }} >Unfollow</button> :
                <button disabled={followingIsFetching.some(id => id === ID)} onClick={() => {
                    FollowingThunkCreator(ID, 'create');
                }} >Follow</button>}

        </div>
        <div className={s.item2}>
            <div>
                <p>{name}</p>
                <p className={s.desc}>{status === null ? 'default status' : status}</p>
            </div>
            <div className={s.item22} >
                <p>{'el.location.country'},</p>
                <p>{'el.location.city'}</p>
            </div>
        </div>
    </div>
</section>

export default User;
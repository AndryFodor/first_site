import s from './Users.module.css'
import axios/*, * as others*/ from 'axios';
import dUserPhoto from '../../assets/images/defaultUser.png'

// Замість того, аби спочатку створювати необхідний масив даних методом map і зберегти в якусь змінну, а потім цей масив закинути в return функції Users під іменем цієї змінної, можна відразу результат роботи  props.data.map(...) закидати в return (виконувати цю операцію відразу в return)

const Users = props => {

    let getUsers = () => {
        if(props.data.length === 0){
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                props.setUsers(res.data.items);
            });
        }
    }
    return <div>
        <p className={s.caption}>Users</p>
        <button onClick={getUsers}>Get Users</button>
        {
            props.data.map(el => {
            return(
                <section className={s.mainContainer} key={el.id} >
                    <div className={s.gridContainer}>
                        <div className={s.item1}>
                            <img src= {el.photos.small != null ? el.photos.small:dUserPhoto} alt={'default_Photo'} />
                            {el.followed?
                            <button onClick={() => props.unfollow(el.id)} >Unfollow</button>:
                            <button onClick={() => props.follow(el.id)} >Follow</button>}
                            
                        </div>
                        <div className={s.item2}>
                            <div>
                                <p>{el.name}</p>
                                <p className={s.desc}>{'el.description'}</p>
                            </div>
                            <div className={s.item22} >
                                <p>{'el.location.country'},</p>
                                <p>{'el.location.city'}</p>
                            </div>
                        </div>
                    </div>
                </section>
                )
            })
        }
    </div>;
}

export default Users;
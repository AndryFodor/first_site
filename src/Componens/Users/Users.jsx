import s from './Users.module.css';
import dUserPhoto from '../../assets/images/defaultUser.png'


// Тут ми створюємо чисту функціональну компоненту, в якій не буде ні звернення до store, ні звернення до сервера. Виконання цих операцій делегується контейнерній компоненті, створеній за допомогою функції connect, та класовій контейнерній компоненті відповідно
// Це зроблено для того, аби цю компоненту було легше тестувати, перевіряти, виправляти та для того, аби можна було легко, наприклад, перевикористати для іншого State management.
let Users = props => {

    return (
        <div>
        <p className={s.caption}>Users</p>
        {
            props.data.map(el => {
            return(
                <section className={s.mainContainer} key={el.id} >
                    <div className={s.gridContainer}>
                        <div className={s.item1}>
                            <img src= {el.photos.small != null ? el.photos.small:dUserPhoto} alt={'user_Photo'} />
                            {el.followed?
                            <button onClick={() => props.unfollow(el.id)} >Unfollow</button>:
                            <button onClick={() => props.follow(el.id)} >Follow</button>}
                            
                        </div>
                        <div className={s.item2}>
                            <div>
                                <p>{el.name}</p>
                                <p className={s.desc}>{el.status === null?'default status':el.status}</p>
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
            <div className={s.pageNumber}>
                {props.renderBackBotton(props.backBottom)}
                {
                    props.ArraycountOfUserPages.map(el => {
                        return <span key = {el} onClick={() => { props.getPageN(el) }} className={el === props.selectedPage ? s.select : ''}>{el}</span>
                    })
                }
                {props.renderNextBotton(props.nextButon)}
            </div>
        </div>
    )
}

export default Users;
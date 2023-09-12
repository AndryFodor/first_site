import s from './Users.module.css';
import dUserPhoto from '../../assets/images/defaultUser.png'
import { NavLink } from "react-router-dom";
import { API } from '../../API/api';


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
                            <NavLink to={`/profile/${el.id}`}>
                                <img src= {el.photos.small != null ? el.photos.small:dUserPhoto} alt={'user_Photo'} />
                            </NavLink>
                            {/* для всіх rest-мктодів, крім get, тут необхідно в об'єкті headers необхідно визначати властивість API-KEY для того, аби сервер міг безпечно дати відповідь. Цей об'єкт, як і об'єкт налаштувань, передається другим для get та delete запита. Для запита post він передається третім параметром
                            Також більшість відповідей із сервера містить resultCode, який свідчить про статус операції. Якщо все пройшло успішно - він рівний 0
                            Не менш важливим є те, що після авторизації необхідно до кожного запита прикріплювати кукі файли, щоб сервер давав інформацію саме для цього конкретного користувача*/}
                            {el.followed?
                            <button onClick={() => {
                                API.Following(el.id, 'delete')
                                .then(res => {
                                    if(res.resultCode === 0){
                                        props.unfollow(el.id)
                                    }
                                })
                            }} >Unfollow</button>:
                            <button onClick={() => {
                                API.Following(el.id, 'create')
                                .then(res => {
                                    if(res.resultCode === 0){
                                        props.follow(el.id)
                                    }
                                })
                                }} >Follow</button>}
                            
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
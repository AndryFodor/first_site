import React from 'react';
import s from './Users.module.css'
import axios/*, * as others*/ from 'axios';
import dUserPhoto from '../../assets/images/defaultUser.png'

// Тут створюємо класову компоненту. Для її створення обов'язково успадкуватися від реактівської компоненти, вже створеної
class UsersC extends React.Component {
    // У випадку, коли ми не хочемо створювати якихось новиї полів, ми можемо не викликати явно конструктор і делегувати створення полів функцією super. Воно виконується по замовчюванню
    // props будуть приходити так само з контейнерної компоненти, як приходили і в функціональну
    constructor(props){
        super(props);

        // Оскільки екземпляр (об'єкт) класу створюється один раз при переході на відповідну сторінку, а потім реакт лише звертається до його методу рендер з новими пропсами, то звернення до сервера за даними можна (але так не роблять) поки що виконати тут. Таким чином при створенні екземпляра класу спочатку виконається ініціалізація масиву користувачів, а потім відбудеться відмальовка
        // На відміну від класових компонент, функціональна компонента викликається щоразу, коли користувач змінює стейт і необхідна перемальовка. Але після цього, коли функція відпрауює, перемалювавши за концепцією FLUX сторінку, всі її дані "помирають". А життєвий цикл класової компоненти буде тривати до того часу, поки користувач не переключиться на іншу сторінку. В той момент роути знищують екземпляр класу (компоненту). Тому коли знову переключитися на цю сторінку, знову створюється ця класова компонента. Але оскільки весь додаток знаходиться в тегу <React.StrictMode>, то відмальовка деяких частин може відбуватися двічі для тестування і безпечнішої відмальовки. Таким чином, якщо тут, в конструкторі виконати, наприклад, alert, то він виконається двічі, оскільки цей тег змушує створювати дві класові компоненти. Якщо тут виконати запит на сервер, то він виконається двічі, і всі користувачі будуть відображатися двічі. Але це не є проблемою, адже всі ці запити будуть виконуватися не тут
        // Цей alert допомагає чітко побачити, коли виконується створення об'єкту
        alert('instance of UserdC created');

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                this.props.setUsers(res.data.items);
            });
    }

    // Необхідні функції ми можемо описати як методи класу. Таким чином ми позбуваємося проблеми нечистої функції. Але створювати для початку методи краще таким синтаксисом, а не стандартним (таким, як метод render). При такому синтаксисі не втрачається контекст і не треба використовувати метод bind (все це досягається тим, що стрілочна функція не має власного контексту на відміну від решти оголошених функцій)
    // getUsers = () => {
    //     if(this.props.data.length === 0){
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users')
    //         .then(res => {
    //             this.props.setUsers(res.data.items);
    //         });
    //     }
    // }


    // При створенні класової компоненти обов'язково повинен бути визначений метож render, який повертає JSX, адже це є суттю компоненти
    render() {
        return <div>
        <p className={s.caption}>Users</p>
        {/* <button onClick={this.getUsers}>Get Users</button> */}
        {
            this.props.data.map(el => {
            return(
                <section className={s.mainContainer} key={el.id} >
                    <div className={s.gridContainer}>
                        <div className={s.item1}>
                            <img src= {el.photos.small != null ? el.photos.small:dUserPhoto} alt={'default_Photo'} />
                            {el.followed?
                            <button onClick={() => this.props.unfollow(el.id)} >Unfollow</button>:
                            <button onClick={() => this.props.follow(el.id)} >Follow</button>}
                            
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
        </div>
    }
}

export default UsersC;

// Замість того, аби спочатку створювати необхідний масив даних методом map і зберегти в якусь змінну, а потім цей масив закинути в return функції Users під іменем цієї змінної, можна відразу результат роботи  props.data.map(...) закидати в return (виконувати цю операцію відразу в return)
// const Users = props => {

//     let getUsers = () => {
//         if(props.data.length === 0){
//             axios.get('https://social-network.samuraijs.com/api/1.0/users')
//             .then(res => {
//                 props.setUsers(res.data.items);
//             });
//         }
//     }
//     return <div>
//         <p className={s.caption}>Users</p>
//         <button onClick={getUsers}>Get Users</button>
//         {
//             props.data.map(el => {
//             return(
//                 <section className={s.mainContainer} key={el.id} >
//                     <div className={s.gridContainer}>
//                         <div className={s.item1}>
//                             <img src= {el.photos.small != null ? el.photos.small:dUserPhoto} alt={'default_Photo'} />
//                             {el.followed?
//                             <button onClick={() => props.unfollow(el.id)} >Unfollow</button>:
//                             <button onClick={() => props.follow(el.id)} >Follow</button>}
                            
//                         </div>
//                         <div className={s.item2}>
//                             <div>
//                                 <p>{el.name}</p>
//                                 <p className={s.desc}>{'el.description'}</p>
//                             </div>
//                             <div className={s.item22} >
//                                 <p>{'el.location.country'},</p>
//                                 <p>{'el.location.city'}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//                 )
//             })
//         }
//     </div>;
// }
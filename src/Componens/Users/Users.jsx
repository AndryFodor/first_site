import s from './Users.module.css'

// Замість того, аби спочатку створювати необхідний масив даних методом map і зберегти в якусь змінну, а потім цей масив закинути в return функції Users під іменем цієї змінної, можна відразу результат роботи  props.data.map(...) закидати в return (виконувати цю операцію відразу в return)

const Users = props => {

    
    if(props.data.length === 0){
        debugger;
        props.setUsers(
            [
                {id:1, avaSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR4hZLEgxoewULSpSW-_64FgQVKWoWYp1D2h68l5C9AaokikW9N4nBmwmutDWhI2GR_pA&usqp=CAU', altImg: 'avaForUser1',
                    followed: true, fullName: 'Dmitry K', description: 'I want to get a good job right now', location: {country: 'Ukraine', city: 'Kyiv'}},
                {id:2, avaSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR4hZLEgxoewULSpSW-_64FgQVKWoWYp1D2h68l5C9AaokikW9N4nBmwmutDWhI2GR_pA&usqp=CAU', altImg: 'avaForUser2' ,
                    followed: false, fullName: 'Andry F', description: 'I want to get a good job right now too', location: {country: 'Ukraine', city: 'Lviv'}},
                {id:3, avaSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR4hZLEgxoewULSpSW-_64FgQVKWoWYp1D2h68l5C9AaokikW9N4nBmwmutDWhI2GR_pA&usqp=CAU', altImg: 'avaForUser3' ,
                    followed: true, fullName: 'Oleg V', description: 'I just want to get a good job', location: {country: 'Ukraine', city: 'Zhytomyr'}}  
            ]
        );
    }

    return <div>
        <p className={s.caption}>Users</p>
        {
            props.data.map(el => {
            return(
                <section className={s.mainContainer} key={el.id} >
                    <div className={s.gridContainer}>
                        <div className={s.item1}>
                            <img src= {el.avaSrc} alt={el.altImg} />
                            {el.followed?
                            <button onClick={() => props.unfollow(el.id)} >Unfollow</button>:
                            <button onClick={() => props.follow(el.id)} >Follow</button>}
                            
                        </div>
                        <div className={s.item2}>
                            <div>
                                <p>{el.fullName}</p>
                                <p className={s.desc}>{el.description}</p>
                            </div>
                            <div className={s.item22} >
                                <p>{el.location.country},</p>
                                <p>{el.location.city}</p>
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
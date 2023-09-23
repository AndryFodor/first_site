import { ADD_MESSAGE_ActionCreator, CHANGED_MESSAGE_ActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
// import StoreContext from '../../StoreContext';
import { connect } from 'react-redux';
import withAuthRedirect from '../../HOC/withAuthRedirect';
import { compose } from 'redux';

// debugger;
// Тепер нам не потрібно передавати в пропсах властивість isAuth саме для withauthRedirect компонента. Він отримує цю інформацію всередині себе
let mapStateToProps = state => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messageData,
        buffer: state.dialogsPage.newMessageBuffer
    }
},
mapDispatchToProps = dispatch =>{
    return{
        onChanges: text => {
            dispatch(CHANGED_MESSAGE_ActionCreator(text))
        },
        SendBotton: () => {
            dispatch(ADD_MESSAGE_ActionCreator());
        }
    }
}

// Тут має бути така логіка. Вона буде створювати ще одну контейнерну компоненту над компонентою Dialogs, логіка якої буде заключатисяс в тому, аби виконати переадресацію
// Як видно, в кожній компоненті логіка та сама, відрізняється хіба що компонента, яку повертає ця функція. Таким чином, ми можемо створити орему функцію для цієї задачі, яка буде називатися компонентом вищого порядку (HOC)
// №2 Також можна не створювати хоком connect контейнерну компоненту і зберігати її в якійсь змінній, щоб потім передати цю змінну в експорт, а можна відразу виконати анонімний експорт. Також можна нашим HOC огортати не компоненту Dialogs, а контейнерну компоненту, що повернув connect. Таким чином ми отримаємо ще коротший запис без використання зийвих змінних
// withAuthRedirect( connect(mapStateToProps, mapDispatchToProps)(Dialogs) )
// Це можна замінити за допомогою такої функції: compose

// В цю функцію в другий виклик передаємо презентаційий компонент, який має бути огорнутий в численні контейнерні
// В перший виклик почергово передаємо ті функції, які мають обробляти і робити контейнер для презентаційного компонента. Важливо, що передавати треба просто функції, не їх виклик
// І того в най виходить така вкладеність: (withAuthRedirect(connect(Dialogs)connect)withAuthRedirect). Тобто, вкладеність треба читати з самого низу вверх
export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)
(Dialogs);

// export default withAuthRedirect( connect(mapStateToProps, mapDispatchToProps)(Dialogs) ); 
import DialogsItem from './Dialog_Item/Dialog_Item';
import s from './Dialogs.module.css'
import Message from './Message/Message';

const Dialogs = props => {

    // Масиви даних, які умовно прийшли із сервера
    // let dialogsData = [
    //     {id:1, name:"Name1"},
    //     {id:2, name:"Name2"},
    //     {id:3, name:"Name3"},
    //     {id:4, name:"Name4"}
    // ],
    // messageData = [
    //     {id: 1, message: ' Lorem, ipsum dolor sit amet consectetur'},
    //     {id: 2, message: 'Dadipisicing elit. Ut, aperiam voluptate quae eius itaque consequatur, nostrum necessitatibus maiores dignissimos perferendis id aliquid nam ipsum possimus sed aliquam nulla cumque cupiditate.'},
    //     {id: 3, message: 'MessLasdsfosmflds'}
    // ]
    // Методом map ми можемо створювати новий масив таким, який нам треба (з тою смаою кількістю елементів). Тут el = {id:1, name:"Name1"}, тобто елементу масива, в якого ми його викликаємо. Повертається новий елемент нового масива. І таким чином ми легко отримаємо масив з тою кількістю компонент, яку нам треба (на які приходять дані із сервера)

    // №2 Тепер ці дані приходять у props як два масиви в одному. Я беру спочатку перший масив і розкладаю його методом map, потім беру другий масив і так само розкладаю. Далі ці масиви будуть виведені в цій компоненті

    let resultDialogs = props.Data[0].map(el => /*return і фігурні дужки якщо є тільки ретурн не потрібно*/
     <DialogsItem id = {el.id} name = {el.name} />
    ),
    resultMessages = props.Data[1].map(el => <Message id = {el.id} message = {el.message}/>);

    return(
        <div className={s.wrapper}>

            <div className={s.names}>

                {/* <DialogsItem id = {dialogsData[0].id} name = {dialogsData[0].name} />
                <DialogsItem id = {dialogsData[1].id} name = {dialogsData[1].name} />
                <DialogsItem id = {dialogsData[2].id} name = {dialogsData[2].name} />
                <DialogsItem id = {dialogsData[3].id} name = {dialogsData[3].name} /> */}
                {/* №2 Замість того, щоб просто вивести кожну компоненту на сторінку, ми можемо дати компілятору масив з цих елементів - і він відобразить його так само. Справа в тому, що браузер саме таким чином відображає масив з компонентами */}
                {/* {
                    [ <DialogsItem id = {dialogsData[0].id} name = {dialogsData[0].name} />,
                    <DialogsItem id = {dialogsData[1].id} name = {dialogsData[1].name} />,
                    <DialogsItem id = {dialogsData[2].id} name = {dialogsData[2].name} />,
                    <DialogsItem id = {dialogsData[3].id} name = {dialogsData[3].name} />]
                } */}

                {/* №2 Або ж можна взагалі дати вже готовий масив, і він виведе все так само */}
                {resultDialogs}


            </div>

            <div className={s.chat}>
                 
                {/* <Message message = {messageData[0].message} id = {messageData[0].id} />
                <Message message = {messageData[1].message} id = {messageData[1].id} />
                <Message message = {messageData[2].message} id = {messageData[2].id} /> */}

                {resultMessages}
            </div>

        </div>
    )
}

export default Dialogs;
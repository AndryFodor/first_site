import React from 'react';
import DialogsItem from './Dialog_Item/Dialog_Item';
import s from './Dialogs.module.css'
import Message from './Message/Message';



const Dialogs = props => {

    let resultDialogs = props.dialogsData.map(el => <DialogsItem id = {el.id} name = {el.name} />),
    resultMessages = props.messagesData.map(el => <Message id = {el.id} message = {el.message}/>),

    SendBottonClick = () =>{
        props.SendBotton();
    },
    onChangesfunc = event => {
        let text = event.target.value;
        props.onChanges(text);
    }

    return(
        <div className={s.wrapper}>

            <div className={s.names}>
                {resultDialogs}
            </div>

            <div className={s.chat}>
                {resultMessages}
                <textarea onChange = {onChangesfunc} value = {props.buffer} placeholder='enter message'></textarea>
                <span onClick={SendBottonClick} className={s.button}>Send</span>
            </div>

        </div>
    )
}

export default Dialogs;
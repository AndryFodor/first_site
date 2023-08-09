import React from 'react';
import DialogsItem from './Dialog_Item/Dialog_Item';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import { ADD_MESSAGE_ActionCreator, CHANGED_MESSAGE_ActionCreator } from '../../redux/store';



const Dialogs = props => {

    let resultDialogs = props.data.dialogsData.map(el => <DialogsItem id = {el.id} name = {el.name} />),
    resultMessages = props.data.messageData.map(el => <Message id = {el.id} message = {el.message}/>),

    SendBottonClick = () =>{
        props.dispatch(ADD_MESSAGE_ActionCreator());
    },
    onChangesfunc = event => {
        let text = event.target.value;
        props.dispatch(CHANGED_MESSAGE_ActionCreator(text))
    }

    return(
        <div className={s.wrapper}>

            <div className={s.names}>
                {resultDialogs}
            </div>

            <div className={s.chat}>
                {resultMessages}
                <textarea onChange = {onChangesfunc} value = {props.data.newMessageBuffer} placeholder='enter message'></textarea>
                <span onClick={SendBottonClick} className={s.button}>Send</span>
            </div>

        </div>
    )
}

export default Dialogs;
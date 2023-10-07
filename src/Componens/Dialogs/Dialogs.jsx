import React from 'react';
import DialogsItem from './Dialog_Item/Dialog_Item';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import MessageForm from '../Profile/MyPosts/MessageForm'



const Dialogs = (props) => {

    let resultDialogs = props.dialogsData.map(el => <DialogsItem id = {el.id} name = {el.name} key = {el.id}/>),
    resultMessages = props.messagesData.map(el => <Message id = {el.id} message = {el.message} key = {el.id}/>),

    SendBottonClick = values =>{
        console.log(values)
        props.SendBotton(values.body);
    }

    return(
        <div className={s.wrapper}>

            <div className={s.names}>
                {resultDialogs}
            </div>

            <div className={s.chat}>
                {resultMessages}
                <MessageForm placeholder = 'Write a message...' getFormData = {SendBottonClick}/>
            </div>

        </div>
    )
}

export default Dialogs;
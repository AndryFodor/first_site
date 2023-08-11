import React from 'react';
import { ADD_MESSAGE_ActionCreator, CHANGED_MESSAGE_ActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';



const DialogsConteiner = props => {
    
    let dialogsData = props.data.dialogsPage.dialogsData,
    messagesData = props.data.dialogsPage.messageData,
    buffer = props.data.dialogsPage.newMessageBuffer,

    SendBotton = () =>{
        props.dispatch(ADD_MESSAGE_ActionCreator());
    },
    onChanges = text => {
        props.dispatch(CHANGED_MESSAGE_ActionCreator(text))
    }

    return <Dialogs onChanges = {onChanges} SendBotton = {SendBotton} dialogsData = {dialogsData} messagesData = {messagesData} buffer = {buffer} />
}

export default DialogsConteiner;
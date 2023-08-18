import React from 'react';
import { ADD_MESSAGE_ActionCreator, CHANGED_MESSAGE_ActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';



const DialogsConteiner = () => {  

    return (
        <StoreContext.Consumer>
            { store => {
                let dialogsData = store.getState().dialogsPage.dialogsData,
                messagesData = store.getState().dialogsPage.messageData,
                buffer = store.getState().dialogsPage.newMessageBuffer,

                SendBotton = () =>{
                    store.dispatch(ADD_MESSAGE_ActionCreator());
                },
                onChanges = text => {
                    store.dispatch(CHANGED_MESSAGE_ActionCreator(text))
                }
                return <Dialogs onChanges = {onChanges} SendBotton = {SendBotton} dialogsData = {dialogsData} messagesData = {messagesData} buffer = {buffer} />
            }}
        </StoreContext.Consumer>
    
    )
}

export default DialogsConteiner;
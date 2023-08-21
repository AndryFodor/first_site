// import React from 'react';
import { ADD_MESSAGE_ActionCreator, CHANGED_MESSAGE_ActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
// import StoreContext from '../../StoreContext';
import { connect } from 'react-redux';

// debugger;

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

let DialogsConteiner = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsConteiner;
import React from 'react';
import DialogsItem from './Dialog_Item/Dialog_Item';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import { ADD_MESSAGE_ActionCreator, CHANGED_MESSAGE_ActionCreator } from '../../redux/store';



const Dialogs = props => {

    let resultDialogs = props.state.dialogsPage.dialogsData.map(el => <DialogsItem id = {el.id} name = {el.name} />),
    resultMessages = props.state.dialogsPage.messageData.map(el => <Message id = {el.id} message = {el.message}/>),

    newMessageEl = React.createRef(),
    SendBottonClick = () =>{
        props.dispatch(ADD_MESSAGE_ActionCreator());
    },
    onChangesfunc = () => {
        let text = newMessageEl.current.value;
        props.dispatch(CHANGED_MESSAGE_ActionCreator(text))
    }

    return(
        <div className={s.wrapper}>

            <div className={s.names}>
                {resultDialogs}
            </div>

            <div className={s.chat}>
                {resultMessages}
                <textarea ref={newMessageEl} onChange = {onChangesfunc} value = {props.state.newMessageBuffer} placeholder='enter message'></textarea>
                <span onClick={SendBottonClick} className={s.button}>Send</span>
            </div>

        </div>
    )
}

export default Dialogs;
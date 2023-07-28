import React from 'react';
import DialogsItem from './Dialog_Item/Dialog_Item';
import s from './Dialogs.module.css'
import Message from './Message/Message';

const Dialogs = props => {

    let resultDialogs = props.state.dialogsPage.dialogsData.map(el => <DialogsItem id = {el.id} name = {el.name} />),
    resultMessages = props.state.dialogsPage.messageData.map(el => <Message id = {el.id} message = {el.message}/>),

    newMessageEl = React.createRef(),
    SendBottonClick = () =>{
        props.dispatch({type: 'ADD-MESSAGE'});
    },
    onChangesfunc = () => {
        let text = newMessageEl.current.value;
        props.dispatch({type: 'CHANGED-MESSAGE', changes: text})
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
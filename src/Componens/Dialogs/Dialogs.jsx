import React from 'react';
import DialogsItem from './Dialog_Item/Dialog_Item';
import s from './Dialogs.module.css'
import Message from './Message/Message';

const Dialogs = props => {

    let resultDialogs = props.Data.dialogsData.map(el => <DialogsItem id = {el.id} name = {el.name} />),
    resultMessages = props.Data.messageData.map(el => <Message id = {el.id} message = {el.message}/>),

    newMessageEl = React.createRef(),
    SendBottonClick = () =>{
        props.funcaddMessage();
    },
    onChangesfunc = () => {
        let text = newMessageEl.current.value;
        props.changedMessage(text);
    }

    return(
        <div className={s.wrapper}>

            <div className={s.names}>
                {resultDialogs}
            </div>

            <div className={s.chat}>
                {resultMessages}
                <textarea ref={newMessageEl} onChange = {onChangesfunc} value = {props.Data.newMessageBuffer} placeholder='enter message'></textarea>
                <span onClick={SendBottonClick} className={s.button}>Send</span>
            </div>

        </div>
    )
}

export default Dialogs;
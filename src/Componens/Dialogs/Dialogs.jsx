import DialogsItem from './Dialog_Item/Dialog_Item';
import s from './Dialogs.module.css'
import Message from './Message/Message';

const Dialogs = () => {
    return(
        <div className={s.wrapper}>

            <div className={s.names}>
                
                <DialogsItem id = '1' name = 'Name1'></DialogsItem>
                <DialogsItem id = '2' name = 'Name2'></DialogsItem>
                <DialogsItem id = '3' name = 'Name3'></DialogsItem>
                <DialogsItem id = '4' name = 'Name4'></DialogsItem>

            </div>

            <div className={s.chat}>
                 
                <Message message = 'Message1 Lorem, ipsum dolor sit amet consectetur'></Message>
                <Message message = 'Message2 adipisicing elit. Ut, aperiam voluptate quae eius itaque consequatur, nostrum necessitatibus maiores dignissimos perferendis id aliquid nam ipsum possimus sed aliquam nulla cumque cupiditate.'></Message>
                <Message message = 'Mess'></Message>

            </div>

        </div>
    )
}

export default Dialogs;
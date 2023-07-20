import { NavLink } from "react-router-dom";
import s from './Dialog_Item.module.css'

const DialogsItem = (props) =>{

    let path = "/dialogs/" + props.id
    return(
        <div className={s.mainWrepper}>
            <div className={s.outerWraper}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    );
}

export default DialogsItem;
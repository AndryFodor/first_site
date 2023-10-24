import React, { useEffect, useState } from "react";
import s from "./ProfileInfo.module.css";

const ProfileStstusWIthHooks = (props) => {
  
    // тут не виникає помилки, що спочатку не встиг виконатися гет-запит за даними профіля, а функція відрендерилася, і через то в пропсах ми отримали пустоту. Тобто, в локальному статусі не буде пустоти а в глобальному потім істиного статуса. Але є проблема, що коли ми переглядаємо сторінку користувача якогось, то загружається для цьої сторінки статус новий. Потім, коли ми переходимо на свій профіль, то в пропсах приходить наш статус, а в локальному стейті залишився ще старий статус іншого користувача, і відображається саме він. Щоб уникнути цю помилку і при завантаженні свого профілю при натиску на статус в полі вводу бачити саме наш статус поточний, треба використати гук useEffect, який дозволить уникати цієї проблеми. Він буде працювати подібно селекторам з бібліотеки reselect. Він прийматиме функцію, яку треба виконувати завжди при умовах зміни тих даних, віж яких він залежить (ці дані передаються другим параметром в масиві). Це звичайно приклад намальований, адже спробувати змінити в якогось користувача статус ми не маємо права і не можемо, змінюватимемо ми лише свій статус, але уявімо, що при спробі змінити статус ми такожм маємо бачити той статус, який в нього встановлений, а не або наш з локального стейту, або ще щось інше
    let [localStatus, changelStatus] = useState(props.status),
        [editMode, changeEditMode] = useState(false);

    useEffect(() => {
        console.log('useEffect change localStatus')
        if(props.status !== localStatus){
            localStatus = changelStatus(props.status);
        }
    }, [props.status])

    const changeMode = () => {
        if(editMode && props.status !== localStatus) props.updateStatus(localStatus)

        changeEditMode(!editMode);
    },
    statusChanged = e => {
        changelStatus(e.currentTarget.value);
    }
    return (
        <div className={s.main1}>
        {!editMode && (
            <div>
            <span onDoubleClick={changeMode}>
                {props.status ? props.status : "don`t set status"}
            </span>
            </div>
        )}
        {editMode && (
            <div>
            <input
                value={localStatus}
                onBlur={changeMode}
                autoFocus={true}
                onChange={statusChanged}
            />
            </div>
        )}
        </div>
    );
};

export default ProfileStstusWIthHooks;

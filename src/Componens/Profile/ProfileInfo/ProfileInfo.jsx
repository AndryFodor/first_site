import s from './ProfileInfo.module.css'

const ProfileInfo = props =>{
    return(
        <div className={s.main}>
            <img src={props.img} alt={props.altForImg}></img>
            <div>
                {props.description}
            </div>
        </div>
    )
}

export default ProfileInfo;
import Preloader from '../../../common/preloader/preloader';
import s from './ProfileInfo.module.css'
import Like from '../../../assets/images/Like_icon.svg.png'
import Dislike from '../../../assets/images/Dislike.png'

const ProfileInfo = props =>{

    if(!props.profile){
        return <Preloader />
    }
    return(
        <div className={s.main}>
            <img src={props.img} alt={props.altForImg}></img>
            <div className={s.gridWrapper}>
                <div>
                    <p>{props.profile.fullName}</p>
                    <img src={props.profile.photos.large} alt="User2" className={s.profilePhoto}/>
                    <p>{props.profile.aboutMe}</p>
                    <span>Looking for a job?</span> <img src={props.profile.lookingForAJob?Like:Dislike} alt="lJ" className={s.jobPhoto} />
                    <p>{props.profile.lookingForAJobDescription}</p>
                </div>
                <div>
                    <ul>
                        <li>Facebook - {props.profile.contacts.facebook}</li>
                        <li>Website - {props.profile.contacts.website}</li>
                        <li>Vk - {props.profile.contacts.vk}</li>
                        <li>Twitter - {props.profile.contacts.twitter}</li>
                        <li>Instagram - {props.profile.contacts.instagram}</li>
                        <li>Youtube - {props.profile.contacts.youtube}</li>
                        <li>Github - {props.profile.contacts.github}</li>
                        <li>MainLink - {props.profile.contacts.mainLink}</li>
                    </ul>
                </div>
            </div>
            

        </div>
    )
}

export default ProfileInfo;
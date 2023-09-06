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
                    <img src={props.profile.photos.large} alt={`User${props.profile.userId}`} className={s.profilePhoto}/>
                    <p>{props.profile.aboutMe}</p>
                    <span>Looking for a job?</span> <img src={props.profile.lookingForAJob?Like:Dislike} alt="lJ" className={s.jobPhoto} />
                    <p>{props.profile.lookingForAJobDescription}</p>
                </div>
                <div>
                    <ul>
                        <li>Facebook - <a href={props.profile.contacts.facebook} target='_blank' without rel="noreferrer">{props.profile.contacts.facebook}</a></li>
                        <li>Website -  <a href={props.profile.contacts.website} target='_blank' without rel="noreferrer">{props.profile.contacts.website}</a></li>
                        <li>Vk -  <a href={props.profile.contacts.vk} target='_blank' without rel="noreferrer">{props.profile.contacts.vk}</a></li>
                        <li>Twitter -  <a href={props.profile.contacts.twitter} target='_blank' without rel="noreferrer">{props.profile.contacts.twitter}</a></li>
                        <li>Instagram -  <a href={props.profile.contacts.instagram} target='_blank' without rel="noreferrer">{props.profile.contacts.instagram}</a></li>
                        <li>Youtube -  <a href={props.profile.contacts.youtube} target='_blank' without rel="noreferrer">{props.profile.contacts.youtube}</a></li>
                        <li>Github -  <a href={props.profile.contacts.github} target='_blank' without rel="noreferrer">{props.profile.contacts.github}</a></li>
                        <li>MainLink -  <a href={props.profile.contacts.mainLink} target='_blank' without rel="noreferrer">{props.profile.contacts.mainLink}</a></li>
                    </ul>
                </div>
            </div>
            

        </div>
    )
}

export default ProfileInfo;
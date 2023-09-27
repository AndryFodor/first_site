import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css'
import MyPostsConteiner from './MyPosts/MyPostsConteiner';

// Як видно, через пропси ми тепер нічого не прокидуємо. Всі контейнерні компоненти тепер беруть необхідні дані та кообеки з контексту компоненти App
const Profile = props =>{
  
    return (
        <div className = {s.p}> 
          <ProfileInfo img = 'https://cdn.pixabay.com/photo/2018/02/02/17/29/nature-3125912_1280.jpg' alt = 'User photo'
            profile = {props.profile} status = {props.status} updateStatus = {props.updateStatus}
          ></ProfileInfo>
          <MyPostsConteiner />
        </div>
    );
}

export default Profile;
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css'
import MyPostsConteiner from './MyPosts/MyPostsConteiner';

const Profile = props =>{
  
    return (
        <div className = {s.p}> 
          <ProfileInfo img = 'https://cdn.pixabay.com/photo/2018/02/02/17/29/nature-3125912_1280.jpg' alt = 'User photo' description = 'Description'></ProfileInfo>
          <MyPostsConteiner data = {props.state} dispatch = {props.dispatch} />
        </div>
    );
}

export default Profile;
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css'

const Profile = props =>{
  
    return (
        <div className = {s.p}> 
          <ProfileInfo img = 'https://cdn.pixabay.com/photo/2018/02/02/17/29/nature-3125912_1280.jpg' alt = 'User photo' description = 'Description'></ProfileInfo>
          <MyPosts data = {props.Data}  funcForNewPosts = {props.funcForPost}/>
        </div>
    );
}

export default Profile;
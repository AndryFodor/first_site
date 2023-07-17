import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css'



const Profile = () =>{
    return (
        <div className = {s.p}> 
          <ProfileInfo img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRisv-yQgXGrto6OxQxX62JyvyQGvRsQQ760g&usqp=CAU' alt = 'User photo' description = 'Description'></ProfileInfo>
          <MyPosts />
        </div>
    );
}

export default Profile;
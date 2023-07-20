import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css'


// №2 В об'єкті props під іменем PostsData дані приходять у вигляді масиву. Але ці дані має відобразити компонента MyPosts. Тому в цю компоненту передаємо дані під іменем data

const Profile = props =>{
  
    return (
        <div className = {s.p}> 
          <ProfileInfo img = 'https://cdn.pixabay.com/photo/2018/02/02/17/29/nature-3125912_1280.jpg' alt = 'User photo' description = 'Description'></ProfileInfo>
          <MyPosts data = {props.Data}/>
        </div>
    );
}

export default Profile;
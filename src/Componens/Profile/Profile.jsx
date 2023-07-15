import MyPosts from './MyPosts/MyPosts';
// import styles from './Profile.module.css'



const Profile = () =>{
    return (
        <div> 
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRisv-yQgXGrto6OxQxX62JyvyQGvRsQQ760g&usqp=CAU' alt='alt'></img>
          <div>
            ava + text
          </div>
          <MyPosts />
        </div>
    );
}

export default Profile;
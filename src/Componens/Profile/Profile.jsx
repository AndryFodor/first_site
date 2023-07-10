import styles from './Profile.module.css'

const Profile = () =>{
    return (
        <div className = {styles.content}>
        
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRisv-yQgXGrto6OxQxX62JyvyQGvRsQQ760g&usqp=CAU' alt='alt'></img>
        
        <div>
          ava + text
        </div>

        <div>
          My posts
          <div>
            New posts
          </div>
          <div>
            <div className={styles.item}>
              Post1
            </div>
            <div className={styles.item}>
              Post2
            </div>
          </div>
        </div>

        <div>
          coment
        </div>

      </div>
    );
}

export default Profile;
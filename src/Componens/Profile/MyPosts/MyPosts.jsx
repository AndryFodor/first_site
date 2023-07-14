import styles from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = () =>{
    return(
        <div className= {styles.main}>
          <textarea name="Post" cols="30" rows="1"></textarea> <br></br>
          <button>Add post</button> 
          <button>Clear all</button>
          <div>My posts</div>
          <div>
            New posts
            <Post message = 'Hi, how are you?' img = 'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png' alt = 'User1'/>
            <Post message = "It`s my first post" img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfaknv6JbkcRppV4gFFlgeGFG3BX77i7uQH_RbGS1qghS__bN9CkixepsC9a69zCmyBI&usqp=CAU' alt = 'User2'/>
          </div>
        </div>
    );
}

export default MyPosts;
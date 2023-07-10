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
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
    );
}

export default MyPosts;
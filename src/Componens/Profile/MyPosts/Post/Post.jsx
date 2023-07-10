import styles from "./Post.module.css"

const Post = () =>{
    return (
        <div className={styles.item}>   
            <img src="https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png" alt="someUser" />
            <span>Text of this post</span>
            <p>like</p>
           </div>

    );
}

export default Post;
import styles from "./Post.module.css"

const Post = (props) =>{
    return (
        <div className={styles.item}>   
            <img src={props.img} alt={props.alt}/>
            <span>{props.message}</span>
            <p>likes <span className={styles.countsOfLikes}>{props["likes"]}</span></p>
           </div>
    );
}

export default Post;
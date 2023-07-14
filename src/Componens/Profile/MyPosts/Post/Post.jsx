import styles from "./Post.module.css"

const Post = (props) =>{
    return (
        <div className={styles.item}>   
            <img src={props.img} alt={props.alt}/>
            <span>{props.message}</span>
            <p>like</p>
           </div>

    );
}

export default Post;
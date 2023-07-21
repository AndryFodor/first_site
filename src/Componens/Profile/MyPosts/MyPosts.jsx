import React from "react"
import styles from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = (props) =>{
  let resultPosts = props.data.postsData.map(el => <Post likes = {el.likes} message = {el.message} img = {el.img} alt = {el.alt}/>)

  // Така робота порушує принцип. Але. Тут ми через реакт звертаємося до елемента на сторінці. Реакт поверне нам об'єкт textarea, в якої будуть різні атриубти. Через них можна звернутися до вмістимого textarea
  let newPostEl = React.createRef();

  let addPostClick = () => {
    let text = newPostEl.current.value;
    alert(text);
  }

    return(
        <div className= {styles.main}>
          <textarea name="Post" ref={newPostEl}></textarea> <br></br>
          <button onClick={ addPostClick }>Add post</button> 
          <button onClick={ () => newPostEl.current.value = '' }>Clear all</button>
          <div>My posts</div>
          <div>
            <h3>New posts</h3>           
            {resultPosts}
          </div>
        </div>
    );
}

export default MyPosts;
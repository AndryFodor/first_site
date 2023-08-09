import React from "react"
import styles from "./MyPosts.module.css"
import Post from "./Post/Post"
import { ADD_POST_ActionCreator, CHANGED_POST_ActionCreator, CLEARE_POST_TEXT_Creator } from "../../../redux/store"

// №2. Всі функції стають методами об'єкта store, а об'єкт state стає його властивістю



const MyPosts = (props) =>{
  let resultPosts = props.data.profilePage.postsData.map(el => <Post likes = {el.likes} message = {el.message} img = {el.img} alt = {el.alt}/>)

  // Така робота порушує принцип. Але. Тут ми через реакт звертаємося до елемента на сторінці. Реакт поверне нам об'єкт textarea, в якої будуть різні атриубти. Через них можна звернутися до вмістимого textarea
  // Пропсами ми передаємо по суті посилання на функцію в state.js, яка обробляє клік по кнопці(формує пост і додає його на стіну)

  let newPostEl = React.createRef();

  let addPostClick = () => {
    // Оскільки повідомлення зберігається в об'єкті state, то ми можемо взяти його звідти, не передаючи в цю функцію жодних параметрів. Таким чином код буде трошки оптимізований, хоча й порушується правило функціонального програмування (чистих функцій)
    props.dispatch(ADD_POST_ActionCreator());
  },
  // ця функція виловлює введену в textarea букву і передає її в state.profileData.textBufferForNewPosts
  onChangefunc = () =>{
    let text = newPostEl.current.value;
    props.dispatch(CHANGED_POST_ActionCreator(text));
  }

    return(
        <div className= {styles.main}>
          <textarea onChange={ onChangefunc } ref={newPostEl} value={props.data.profilePage.textBufferForNewPosts} placeholder="No more then 40 char."/> <br></br>
          <button onClick={ addPostClick }>Add post</button> 
          <button onClick={ () => { props.dispatch(CLEARE_POST_TEXT_Creator()) } }>Clear all</button>
          <div>My posts</div>
          <div>
            <h3>New posts</h3>           
            {resultPosts}
          </div>
        </div>
    );
}

export default MyPosts;
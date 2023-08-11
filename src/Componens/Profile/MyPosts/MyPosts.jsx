import React from "react"
import styles from "./MyPosts.module.css"
import Post from "./Post/Post"

// №2. Всі функції стають методами об'єкта store, а об'єкт state стає його властивістю


// №3. Тепер ми зробили цю компоненту презентаціонною (тупою). Вона отримує певні callback функції і якісь дані, які не пов'язані напряму з store. Таким чином ми отримуємо чисту функцію, оскільки вона не зв'язана із редаксківським store. Це зручно тим, що тепер ми зможемо використати цю компоненту для будь-якого state menagement, чи то гуки, чи то редакс, чи то мобікс і так далі

const MyPosts = (props) =>{
  let resultPosts = props.postsData.map(el => <Post likes = {el.likes} message = {el.message} img = {el.img} alt = {el.alt}/>)

  // Така робота порушує принцип. Але. Тут ми через реакт звертаємося до елемента на сторінці. Реакт поверне нам об'єкт textarea, в якої будуть різні атриубти. Через них можна звернутися до вмістимого textarea
  // Пропсами ми передаємо по суті посилання на функцію в state.js, яка обробляє клік по кнопці(формує пост і додає його на стіну)

  let newPostEl = React.createRef();

  let addPostClick = () => {
    // Оскільки повідомлення зберігається в об'єкті state, то ми можемо взяти його звідти, не передаючи в цю функцію жодних параметрів. Таким чином код буде трошки оптимізований, хоча й порушується правило функціонального програмування (чистих функцій)
    props.PostClick();
  },
  // ця функція виловлює введену в textarea букву і передає її в state.profileData.textBufferForNewPosts
  onChangefunc = () =>{
    let text = newPostEl.current.value;
    props.onChangefunc(text);
  },
  onClearfunc = () => {
    props.ClearAll();
  }

    return(
        <div className= {styles.main}>
          <textarea onChange={ onChangefunc } ref={newPostEl} value={props.buffer} placeholder="No more then 40 char."/> <br></br>
          <button onClick={ addPostClick }>Add post</button> 
          <button onClick={ onClearfunc }>Clear all</button>
          <div>My posts</div>
          <div>
            <h3>New posts</h3>           
            {resultPosts}
          </div>
        </div>
    );
}

export default MyPosts;
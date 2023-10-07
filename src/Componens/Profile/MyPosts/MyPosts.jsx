import React from "react"
import styles from "./MyPosts.module.css"
import Post from "./Post/Post"
import MessageForm from "./MessageForm"

// №2. Всі функції стають методами об'єкта store, а об'єкт state стає його властивістю


// №3. Тепер ми зробили цю компоненту презентаціонною (тупою). Вона отримує певні callback функції і якісь дані, які не пов'язані напряму з store. Таким чином ми отримуємо чисту функцію, оскільки вона не зв'язана із редаксківським store. Це зручно тим, що тепер ми зможемо використати цю компоненту для будь-якого state menagement, чи то гуки, чи то редакс, чи то мобікс і так далі

const MyPosts = (props) =>{
  let resultPosts = props.postsData.map(el => <Post likes = {el.likes} message = {el.message} img = {el.img} alt = {el.alt} key = {el.id}/>)

  let getFormData = values => {
    console.log(values)
    props.PostClick(values.body);
  }

    return(
        <div className= {styles.main}>
          <MessageForm placeholder = "No more then 40 char" getFormData = {getFormData} />
          {/* <textarea onChange={ onChangefunc } ref={newPostEl} value={props.buffer} placeholder="No more then 40 char."/> <br></br>
          <button onClick={ addPostClick }>Add post</button> 
          <button onClick={ onClearfunc }>Clear all</button> */}
          <div>My posts</div>
          <div>
            <h3>New posts</h3>           
            {resultPosts}
          </div>
        </div>
    );
}



export default MyPosts;
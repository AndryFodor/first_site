import styles from "./MyPosts.module.css"
import Post from "./Post/Post"

// №2 тут використовується BLL(business logic layer),redux  тобто бази даних, сервер і тд і тп; i UI(user interface) - це вже і є react
// дані з бази даних приходять у вигляді масиву з об'єктами, якими ми вже в свою чергу маніпулюємо як нам треба

const MyPosts = (props) =>{

  // №2 Сюди дані приходять під іменем data. Я беру і на основі цього масиву даних будую новий масив resultPosts, елементами якого є компоненти Post з потрібними данимим. Далі цей масив буде передано через компоненту Реакту, і він відобразить всі компоненти на сторінці 
  let resultPosts = props.data.map(el => <Post likes = {el.likes} message = {el.message} img = {el.img} alt = {el.alt}/>)

    return(
        <div className= {styles.main}>
          <textarea name="Post"></textarea> <br></br>
          <button>Add post</button> 
          <button>Clear all</button>
          <div>My posts</div>
          <div>
            <h3>New posts</h3>
            {/* тут вказані атрибути є аргументами так званої функції jsx. Вони передаються в неї як поля об'єкта, до кожного можна звернутися по імені*/}
            {/* <Post likes = {postsData[0].likes} message = {postsData[0].message} img = {postsData[0].img} alt = {postsData[0].alt} />
            <Post likes = {postsData[1].likes} message = {postsData[1].message} img = {postsData[1].img} alt = {postsData[1].alt} /> */}
            {/* №2 Але насправді правильно відображати компоненти таким чином*/}
            {resultPosts}
          </div>
        </div>
    );
}

export default MyPosts;
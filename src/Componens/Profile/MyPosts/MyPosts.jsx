import styles from "./MyPosts.module.css"
import Post from "./Post/Post"

// №2 тут використовується BLL(business logic layer),redux  тобто бази даних, сервер і тд і тп; i UI(user interface) - це вже і є react
// дані з бази даних приходять у вигляді масиву з об'єктами, якими ми вже в свою чергу маніпулюємо як нам треба

const MyPosts = () =>{

  let postsData = [
    {id:1, likes: 13, message: 'Hi, how are you?', img: 'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png', alt: 'User1'},
    {id:2, likes: 32, message: "It`s my first post", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfaknv6JbkcRppV4gFFlgeGFG3BX77i7uQH_RbGS1qghS__bN9CkixepsC9a69zCmyBI&usqp=CAU', alt: 'User2'}
],
  resultPosts = postsData.map(el => <Post likes = {el.likes} message = {el.message} img = {el.img} alt = {el.alt}/>)

    return(
        <div className= {styles.main}>
          <textarea name="Post" cols="30" rows="1"></textarea> <br></br>
          <button>Add post</button> 
          <button>Clear all</button>
          <div>My posts</div>
          <div>
            New posts
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
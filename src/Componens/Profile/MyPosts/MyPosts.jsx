import React from "react"
import styles from "./MyPosts.module.css"
import Post from "./Post/Post"
import MessageForm from "./MessageForm"

// №2. Всі функції стають методами об'єкта store, а об'єкт state стає його властивістю


// №3. Тепер ми зробили цю компоненту презентаціонною (тупою). Вона отримує певні callback функції і якісь дані, які не пов'язані напряму з store. Таким чином ми отримуємо чисту функцію, оскільки вона не зв'язана із редаксківським store. Це зручно тим, що тепер ми зможемо використати цю компоненту для будь-якого state menagement, чи то гуки, чи то редакс, чи то мобікс і так далі
// Бувають такі випадки, що бітьківська компонента отримає нові пропси під час виконання і має перемалюватися. Але оскільки ця компонента належить батьківській, то вона буде теж перемальовуватися автоматично. А що означає ререндеринг. Реакт викликає компоненту, вона відпрацьовує і повертає jsx. Цей jsx babel має перетворити в звичайний js-код, який, використовуючи бібліотеку React, створюж нові елементи virtualDOM. Після цього Реакт виконує reconcilation, тобто зрівняння отриманого віртуалдому з реальним. І якщо є відмінності, то Реакт вже виконує сильно затратну операцію перемальовки реального DOM. В цьому випадку Реакт дійде до етапу reconcilation і, зрозумівши, що відмінностей нема, не виконуватиме точкової перемальовки. Але все ж вся ця робота бейбла і створення нового віртуального дому, який в таких ситуаціях безкорисний, оскільки утворюється той самий віртуалдом, завантажує процесор, використовує ресурси комп'ютера, що може в серйозніших випадках значно зменшити продуктивність додатку. Для уникнення таких ситуацій слід використовувати HOC реакта memo. Він, використовуючи закешировані дані, буде перевіряти нові пропси зі старими і в залежності від того буде казати Реакту, чи треба викликати знову цей компонент, чи ні. Працює подібно до shouldComponentRender в класових компонентах. Це спосіб оптимізації, який звичайно має багато нюансів, але до них пізніше
const MyPosts = React.memo((props) =>{
  
  console.log('Render under line')
  let resultPosts = props.postsData.map(el => <Post likes = {el.likes} message = {el.message} img = {el.img} alt = {el.alt} key = {el.id}/>)

  let getFormData = values => {
    console.log(values)
    props.PostClick(values.body);
  },
  maxChar = 30;

    return(
        <div className= {styles.main}>
          <MessageForm placeholder = {`No more then ${maxChar} char`} maxChar = {maxChar} getFormData = {getFormData} bottonText = 'Add post'/>
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
});



export default MyPosts;
import React from "react"
import { ADD_POST_ActionCreator, CHANGED_POST_ActionCreator, CLEARE_POST_TEXT_Creator } from "../../../redux/profileReducer"
import MyPosts from "./MyPosts"


// №3 Для того, аби можна було досягнути презентаціонної компоненти, треба якесь місце, яке б організвувало їй необхідну подачу даних. Ця функціональна компонента є контейнером для компоненти MyPosts. Вона не робить нічого, крім того, що відмальовує її. Але при її відмальовці ця компонента передає їй всі необхідні коллбеки та дані із store. Це не є чиста компонента, вона працює зі стором напрямую. Але вона на це має право, адже вона не відображає жодних даних. Таким чином, це тільки допоміжна компонента, яка основну робить доступною для будь-якого state-menagement. 
// Тут опрацьовується store, з нього вибирається все необхідне для MyPosts, і передається їй через пропси. Таким чином компонента MyPosts не буде знати нічого про зовнішній світ, не буде до нього прив'язана. І це прекрасно, таким чином вона може вважатися універсальною 
// Також це допомагає досягнути принципу простої відповідальності. Адже тепер ця компонента лише обробляє дані і більше нічого. А компонента MyPosts, користуючись цими даними, тільки відмальовує необхідний контент на сторінці

const MyPostsConteiner = (props) =>{
  let postsData = props.data.profilePage.postsData,
  buffer = props.data.profilePage.textBufferForNewPosts;

  let PostClick = () => {
    props.dispatch(ADD_POST_ActionCreator());
  },
  onChangefunc = (text) =>{
    props.dispatch(CHANGED_POST_ActionCreator(text));
  },
  ClearAll = () => {
    props.dispatch(CLEARE_POST_TEXT_Creator())
  }

    return(<MyPosts onChangefunc = {onChangefunc} PostClick = {PostClick} ClearAll = {ClearAll}
                    postsData = {postsData} buffer = {buffer}/>);
}

export default MyPostsConteiner;
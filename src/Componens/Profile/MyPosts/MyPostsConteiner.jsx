import { ADD_POST_ActionCreator, CHANGED_POST_ActionCreator, CLEARE_POST_TEXT_Creator } from "../../../redux/profileReducer"
import MyPosts from "./MyPosts"
// import StoreContext from "../../../StoreContext";
import { connect } from "react-redux";


// №3 Для того, аби можна було досягнути презентаціонної компоненти, треба якесь місце, яке б організвувало їй необхідну подачу даних. Ця функціональна компонента є контейнером для компоненти MyPosts. Вона не робить нічого, крім того, що відмальовує її. Але при її відмальовці ця компонента передає їй всі необхідні коллбеки та дані із store. Це не є чиста компонента, вона працює зі стором напрямую. Але вона на це має право, адже вона не відображає жодних даних. Таким чином, це тільки допоміжна компонента, яка основну робить доступною для будь-якого state-menagement. 
// Тут опрацьовується store, з нього вибирається все необхідне для MyPosts, і передається їй через пропси. Таким чином компонента MyPosts не буде знати нічого про зовнішній світ, не буде до нього прив'язана. І це прекрасно, таким чином вона може вважатися універсальною 
// Також це допомагає досягнути принципу простої відповідальності. Адже тепер ця компонента лише обробляє дані і більше нічого. А компонента MyPosts, користуючись цими даними, тільки відмальовує необхідний контент на сторінці


// №3 Тут ми використовуємо констекст StoreContext, якому при Provider задали як value як store. Тут як Consumer ми можемо використовувати його, приймаючи як параметр в анонімній функції в середині відповідного тегу
// const MyPostsConteiner = () =>{


//     return <StoreContext.Consumer>
//       {   store => {
//           let postsData = store.getState().profilePage.postsData,
//           buffer = store.getState().profilePage.textBufferForNewPosts;
        
//           let PostClick = () => {
//             store.dispatch(ADD_POST_ActionCreator());
//           },
//           onChangefunc = (text) =>{
//           store.dispatch(CHANGED_POST_ActionCreator(text));
//           },
//           ClearAll = () => {
//             store.dispatch(CLEARE_POST_TEXT_Creator())
//           }
//           return <MyPosts onChangefunc = {onChangefunc} PostClick = {PostClick} ClearAll = {ClearAll}
//                     postsData = {postsData} buffer = {buffer}/>
//         }
//       }
//     </StoreContext.Consumer>
    
// }

// №4 Використовуючи бібліотеку react-redux ми можемо створювати за допомогою функції connect таку саму контейнерну компоненту, навіть кращу. При першому її виклику передаються два колбеки, які формують об'єкти з даними і колбеками, необхідні презентаційній компоненті
// Ім'я полів вказаних об'єктів будуть іменами в пропсах у переданої другий раз компоненти. Значення такими і будуть. Але є одна проблема. Функція connect так з'єднує сторе з презентаційною компонентою, що при зміні одної частинки стейта лише та частинка і перемальовується, а не вся сторінка.
// І тому вона розрозбена по принципу чистої функції. Вона не має змінювати дані, які приходять в неї параметрами, напряму. Вона може змінювати лише їхні копії

const mapStateToProps = state =>{
  return{
    postsData: state.profilePage.postsData,
    buffer: state.profilePage.textBufferForNewPosts
  }
},
mapDispatchToProps = dispatch =>{
  return{
    onChangefunc: text => {
      dispatch(CHANGED_POST_ActionCreator(text));
    },
    PostClick: () => {
      dispatch(ADD_POST_ActionCreator());
    },
    ClearAll: () => {
      dispatch(CLEARE_POST_TEXT_Creator())
    }
  }
}

const Super_MyPostsConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default Super_MyPostsConteiner;
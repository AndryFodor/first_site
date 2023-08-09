// таким чином ми можемо імпортувати цю функцію в index.js, в якому міститься rerenderEntireTree. А потім викликати її там і передати параметром якраз цю функцію. Таким чином ми уникнемо циклічної залежності
// export const subscribe = observer => {
//   rerenderEntireTree = observer; //тут використано патерн observe
// }

import DialogsReducer from "./dialogsReducer";
import FriendsReducer from "./friendsReducer";
import NewsReducer from "./newsReducer";
import ProfileReducer from "./profileReducer";

// Тепер переходимо до кроку застовсування свого роду ООП. Складемо об'єкт,який міститиме властивості як дані і методи як функції, які використовувалися минулого разу. І тепер все це слід передати далі через пропси, але тепер це все зберігатиметься в одному об'єкті

let store = {
  rerenderEntireTree() {},
  subscribe(observer) {
    this.rerenderEntireTree = observer; 
  },

  _state: {
    profilePage: {
      postsData: [
        {id:1, likes: 13, message: 'Hi, dear, how are you?', img: 'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png', alt: 'User1'},
        {id:2, likes: 32, message: "It`s my first post", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfaknv6JbkcRppV4gFFlgeGFG3BX77i7uQH_RbGS1qghS__bN9CkixepsC9a69zCmyBI&usqp=CAU', alt: 'User2'}
      ],
      textBufferForNewPosts: ''
    },
    dialogsPage: {
      dialogsData: [
        {id:1, name:"Andrew"},
        {id:2, name:"Naaame2"},
        {id:3, name:"3"},
        {id:4, name:"Name4"},
        {id:5, name: "LongggggggNName5"},
        {id:6, name: "..."}
      ],
      messageData: [
        {id: 1, message: ' Lorem, ipsum dolor sit amet consectetur'},
        {id: 2, message: 'Dadipisicing elit. Ut, aperiam voluptate quae eius itaque consequatur, nostrum necessitatibus maiores dignissimos perferendis id aliquid nam ipsum possimus sed aliquam nulla cumque cupiditate.'},
        {id: 3, message: 'Message of 5 lorems: Lorem Lorem Lorem Lorem Lorem'}
      ],
        newMessageBuffer: ''
    },
    friendsPage: {
      friendsData: [
        {id: 1, name: 'Friend1 lfllf fl', img: 'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png', alt: "frend1" },
        {id: 2, name: 'Friend2', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfaknv6JbkcRppV4gFFlgeGFG3BX77i7uQH_RbGS1qghS__bN9CkixepsC9a69zCmyBI&usqp=CAU', alt: "friend2"},
        {id: 3, name: 'Friend3', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR4hZLEgxoewULSpSW-_64FgQVKWoWYp1D2h68l5C9AaokikW9N4nBmwmutDWhI2GR_pA&usqp=CAU', alt: "friend3" },
        {id: 4, name: 'Friend4', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRho7o-mEZpAkBRGP-w-kvXsJgy2EzK_UChiJDGMX1mpZHULNU2-yQplj0mV_HzX3PT4Rk&usqp=CAU', alt: "friend4" },
        {id: 5, name: 'Friend5', img: 'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png', alt: "friend5" },
        {id: 6, name: 'Friend6', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfaknv6JbkcRppV4gFFlgeGFG3BX77i7uQH_RbGS1qghS__bN9CkixepsC9a69zCmyBI&usqp=CAU', alt: "friend6"},
        {id: 7, name: 'Friend7', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR4hZLEgxoewULSpSW-_64FgQVKWoWYp1D2h68l5C9AaokikW9N4nBmwmutDWhI2GR_pA&usqp=CAU', alt: "friend7" },
        {id: 8, name: 'Friend8', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRho7o-mEZpAkBRGP-w-kvXsJgy2EzK_UChiJDGMX1mpZHULNU2-yQplj0mV_HzX3PT4Rk&usqp=CAU', alt: "friend8" },
        {id: 9, name: 'Sh9', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRho7o-mEZpAkBRGP-w-kvXsJgy2EzK_UChiJDGMX1mpZHULNU2-yQplj0mV_HzX3PT4Rk&usqp=CAU', alt: "friend9" },
        {id: 10, name: 'Friend10', img: 'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png', alt: "frend10" },
        {id: 11, name: 'Friend11', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfaknv6JbkcRppV4gFFlgeGFG3BX77i7uQH_RbGS1qghS__bN9CkixepsC9a69zCmyBI&usqp=CAU', alt: "friend11"},
        {id: 12, name: 'Friend12', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR4hZLEgxoewULSpSW-_64FgQVKWoWYp1D2h68l5C9AaokikW9N4nBmwmutDWhI2GR_pA&usqp=CAU', alt: "frend12" },
        {id: 13, name: 'Friend13_with very long name', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRho7o-mEZpAkBRGP-w-kvXsJgy2EzK_UChiJDGMX1mpZHULNU2-yQplj0mV_HzX3PT4Rk&usqp=CAU', alt: "frend13" },
        {id: 14, name: 'Friend14', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRho7o-mEZpAkBRGP-w-kvXsJgy2EzK_UChiJDGMX1mpZHULNU2-yQplj0mV_HzX3PT4Rk&usqp=CAU', alt: "frend14" },
        {id: 15, name: 'Friend15', img: 'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png', alt: "frend15" },
        {id: 16, name: 'Friend16', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfaknv6JbkcRppV4gFFlgeGFG3BX77i7uQH_RbGS1qghS__bN9CkixepsC9a69zCmyBI&usqp=CAU', alt: "friend16"},
        {id: 17, name: 'Friend17', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR4hZLEgxoewULSpSW-_64FgQVKWoWYp1D2h68l5C9AaokikW9N4nBmwmutDWhI2GR_pA&usqp=CAU', alt: "frend17" },
        {id: 18, name: 'Friend18', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRho7o-mEZpAkBRGP-w-kvXsJgy2EzK_UChiJDGMX1mpZHULNU2-yQplj0mV_HzX3PT4Rk&usqp=CAU', alt: "frend18" }       
      ]
    },
    newsPage:{
      newsData: [
        {id:1, message: "I started deeeling with redux", date: '9.8.2023 13:00'}
      ],
      newsMessageBuffer: ""
    }   
  },

  // addPost() {
  //   if(this._state.profilePage.textBufferForNewPosts.length > 40){
  //     alert(`Your message is too long ${this._state.profilePage.textBufferForNewPosts.length} character (more then 40). That is why we cannot publicate it`);
  //     this._state.profilePage.textBufferForNewPosts = '';
  //   } else{
  
  //     let newPost = {
  //       id: this._state.profilePage.postsData[this._state.profilePage.postsData.length - 1].id + 1,
  //       likes: 0,
  //       message: this._state.profilePage.textBufferForNewPosts,
  //       img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR4hZLEgxoewULSpSW-_64FgQVKWoWYp1D2h68l5C9AaokikW9N4nBmwmutDWhI2GR_pA&usqp=CAU',
  //       alt: 'My post'
  //     };
    
  //     this._state.profilePage.postsData.push(newPost);
  //   }
  //   this._state.profilePage.textBufferForNewPosts = '';
  //   this.rerenderEntireTree(this);
  // },

  // addMessage() {
  //   let newMessage = {
  //     id: this._state.dialogsPage.messageData[this._state.dialogsPage.messageData.length - 1].id + 1,
  //     message: this._state.dialogsPage.newMessageBuffer
  //   };
  //   this._state.dialogsPage.messageData.push(newMessage);
  //   this._state.dialogsPage.newMessageBuffer = '';
  //   this.rerenderEntireTree(this);
  // },

  // changedPost(changes) {
  //   this._state.profilePage.textBufferForNewPosts = changes;
  //   this.rerenderEntireTree(this);
  // },

  // changedMessage(changes)  {
  //   this._state.dialogsPage.newMessageBuffer = changes;
  //   this.rerenderEntireTree(this);
  // },


  // замість того, щоб кожний метод містився окремо, їх всіх можна скласти в один метод dispathValue. Це дуже спрощує подальшу роботу, адже в об'єкті action буде передаватися вся інформація, необхідна для реалізації потрібного фрагменту кода

  dispatchEvent(action) { //action = {type: ADD-POST,... }
    
    this._state.profilePage = ProfileReducer(this._state.profilePage, action);
    this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action);
    this._state.newsPage = NewsReducer(this._state.newsPage, action);
    this._state.friendsPage = FriendsReducer(this._state.friendsPage, action);

    this.rerenderEntireTree(this._state);
  }
}

export default store;

// const state = {
//   profilePage: {
//     postsData: [
//       {id:1, likes: 13, message: 'Hi, dear, how are you?', img: 'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png', alt: 'User1'},
//       {id:2, likes: 32, message: "It`s my first post", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfaknv6JbkcRppV4gFFlgeGFG3BX77i7uQH_RbGS1qghS__bN9CkixepsC9a69zCmyBI&usqp=CAU', alt: 'User2'}
//     ],
//     textBufferForNewPosts: ''
//   },
//   dialogsPage: {
//     dialogsData: [
//       {id:1, name:"Andrew"},
//       {id:2, name:"Naaame2"},
//       {id:3, name:"3"},
//       {id:4, name:"Name4"},
//       {id:5, name: "LongggggggNName5"},
//       {id:6, name: "..."}
//     ],
//   messageData: [
//       {id: 1, message: ' Lorem, ipsum dolor sit amet consectetur'},
//       {id: 2, message: 'Dadipisicing elit. Ut, aperiam voluptate quae eius itaque consequatur, nostrum necessitatibus maiores dignissimos perferendis id aliquid nam ipsum possimus sed aliquam nulla cumque cupiditate.'},
//       {id: 3, message: 'Message of 5 lorems: Lorem Lorem Lorem Lorem Lorem'}
//     ],
//   newMessageBuffer: ''
//   },
//   friendsPage: {
//     friendsData: [
//       {id: 1, name: 'Friend1 lfllf fl', img: 'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png', alt: "frend1" },
//       {id: 2, name: 'Friend2', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfaknv6JbkcRppV4gFFlgeGFG3BX77i7uQH_RbGS1qghS__bN9CkixepsC9a69zCmyBI&usqp=CAU', alt: "friend2"},
//       {id: 3, name: 'Friend3', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR4hZLEgxoewULSpSW-_64FgQVKWoWYp1D2h68l5C9AaokikW9N4nBmwmutDWhI2GR_pA&usqp=CAU', alt: "friend3" },
//       {id: 4, name: 'Friend4', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRho7o-mEZpAkBRGP-w-kvXsJgy2EzK_UChiJDGMX1mpZHULNU2-yQplj0mV_HzX3PT4Rk&usqp=CAU', alt: "friend4" },
//       {id: 5, name: 'Friend5', img: 'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png', alt: "friend5" },
//       {id: 6, name: 'Friend6', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfaknv6JbkcRppV4gFFlgeGFG3BX77i7uQH_RbGS1qghS__bN9CkixepsC9a69zCmyBI&usqp=CAU', alt: "friend6"},
//       {id: 7, name: 'Friend7', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR4hZLEgxoewULSpSW-_64FgQVKWoWYp1D2h68l5C9AaokikW9N4nBmwmutDWhI2GR_pA&usqp=CAU', alt: "friend7" },
//       {id: 8, name: 'Friend8', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRho7o-mEZpAkBRGP-w-kvXsJgy2EzK_UChiJDGMX1mpZHULNU2-yQplj0mV_HzX3PT4Rk&usqp=CAU', alt: "friend8" },
//       {id: 9, name: 'Sh9', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRho7o-mEZpAkBRGP-w-kvXsJgy2EzK_UChiJDGMX1mpZHULNU2-yQplj0mV_HzX3PT4Rk&usqp=CAU', alt: "friend9" },
//       {id: 10, name: 'Friend10', img: 'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png', alt: "frend10" },
//       {id: 11, name: 'Friend11', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfaknv6JbkcRppV4gFFlgeGFG3BX77i7uQH_RbGS1qghS__bN9CkixepsC9a69zCmyBI&usqp=CAU', alt: "friend11"},
//       {id: 12, name: 'Friend12', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR4hZLEgxoewULSpSW-_64FgQVKWoWYp1D2h68l5C9AaokikW9N4nBmwmutDWhI2GR_pA&usqp=CAU', alt: "frend12" },
//       {id: 13, name: 'Friend13_with very long name', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRho7o-mEZpAkBRGP-w-kvXsJgy2EzK_UChiJDGMX1mpZHULNU2-yQplj0mV_HzX3PT4Rk&usqp=CAU', alt: "frend13" },
//       {id: 14, name: 'Friend14', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRho7o-mEZpAkBRGP-w-kvXsJgy2EzK_UChiJDGMX1mpZHULNU2-yQplj0mV_HzX3PT4Rk&usqp=CAU', alt: "frend14" },
//       {id: 15, name: 'Friend15', img: 'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png', alt: "frend15" },
//       {id: 16, name: 'Friend16', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfaknv6JbkcRppV4gFFlgeGFG3BX77i7uQH_RbGS1qghS__bN9CkixepsC9a69zCmyBI&usqp=CAU', alt: "friend16"},
//       {id: 17, name: 'Friend17', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR4hZLEgxoewULSpSW-_64FgQVKWoWYp1D2h68l5C9AaokikW9N4nBmwmutDWhI2GR_pA&usqp=CAU', alt: "frend17" },
//       {id: 18, name: 'Friend18', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRho7o-mEZpAkBRGP-w-kvXsJgy2EzK_UChiJDGMX1mpZHULNU2-yQplj0mV_HzX3PT4Rk&usqp=CAU', alt: "frend18" }       
//     ]
//   }
  
// };



// таким чином ця функція буде імпортуватися трохи інакшим чином, не по дефолту

// export let addPost = () => {
//   if(state.profilePage.textBufferForNewPosts.length > 40){
//     alert(`Your message is too long ${state.profilePage.textBufferForNewPosts.length} character (more then 40). That is why we cannot publicate it`);
//     state.profilePage.textBufferForNewPosts = '';
//   } else{

//     let newPost = {
//       id: state.profilePage.postsData[state.profilePage.postsData.length - 1].id + 1,
//       likes: 0,
//       message: state.profilePage.textBufferForNewPosts,
//       img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR4hZLEgxoewULSpSW-_64FgQVKWoWYp1D2h68l5C9AaokikW9N4nBmwmutDWhI2GR_pA&usqp=CAU',
//       alt: 'My post'
//     }
  
//     state.profilePage.postsData.push(newPost);
//     state.profilePage.textBufferForNewPosts = '';
//   }

//   rerenderEntireTree(state);
// }

// export let addMessage = () => {
//   let newMessage = {
//     id: state.dialogsPage.messageData[state.dialogsPage.messageData.length - 1].id + 1,
//     message: state.dialogsPage.newMessageBuffer
//   };
//   state.dialogsPage.messageData.push(newMessage);
//   state.dialogsPage.newMessageBuffer = '';
//   rerenderEntireTree(state);
// }

// Ця функція створена для того, аби дотриматися концепції FLUX (до змін в UI можуть призвести тільки зміни в BLL). Тобто коли ми вводимо в textarea текст - ми змінюємо UI, при чому BLL нее змінює свого стану. А це суперечить концепції FLUX. 
// Щоб уникнути цього, ми створюємо в обєкті state нову змінну textBufferForNewPosts, яка буде відповідати за введений текст. Тобто ми наживаємо на літеру в textarea - і спочатку ця буква летить в об'єкт state через функцію changedPost, а потім запускається функція rerenderEntireTree, яка швидко все перемальовує. І тільки таким чином через пропси введена буква потрапляє в UI, тобто в textarea
// Здавалося б, що це якийсь нонсенс. Але так треба робити. Тим більше через велике здивування я легко зможу зрозуміти і усвоїти принцип FLUX

// export let changedPost = changes => {
//   state.profilePage.textBufferForNewPosts = changes;
//   rerenderEntireTree(state);
// }

// export let changedMessage = changes => {
//   state.dialogsPage.newMessageBuffer = changes;
//   rerenderEntireTree(state);
// }

// export default state;
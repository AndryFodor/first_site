import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import state from './redux/state'


// Компопонента BrowserRouter обов'язково має бути, адже лише всередині неї можна викликати такі компоненти, як Route i Routes

// №2 Це дані, які були симуляцією даних із сервера у відповідних компонентах. 
// №2 Тепер виконується симуляція того, наче ми їх отримуємо окремо в index.js, і звідси передаємо у необхідні компоненти
// let postsData = [
//   {id:1, likes: 13, message: 'Hi, dear, how are you?', img: 'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png', alt: 'User1'},
//   {id:2, likes: 32, message: "It`s my first post", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfaknv6JbkcRppV4gFFlgeGFG3BX77i7uQH_RbGS1qghS__bN9CkixepsC9a69zCmyBI&usqp=CAU', alt: 'User2'}
// ], 
// dialogsData = [
//   {id:1, name:"Andrew"},
//   {id:2, name:"Naaame2"},
//   {id:3, name:"3"},
//   {id:4, name:"Name4"},
//   {id:5, name: "LongggggggName5"}
// ],
// messageData = [
//   {id: 1, message: ' Lorem, ipsum dolor sit amet consectetur'},
//   {id: 2, message: 'Dadipisicing elit. Ut, aperiam voluptate quae eius itaque consequatur, nostrum necessitatibus maiores dignissimos perferendis id aliquid nam ipsum possimus sed aliquam nulla cumque cupiditate.'},
//   {id: 3, message: 'Message of 5 lorems: Lorem Lorem Lorem Lorem Lorem'}
// ]

// №2 Щоб зручно було передавати дані, я складу новий масив, елементами якого будуть масиви даних, що "прийшли" із сервера, і передам їх в компоненту App під іменем Data
// const Data = [postsData, dialogsData, messageData];

// №2 Насправді для даних створюється окремий файл, який їх оброблятиме і складатиме в однин об'єкт. Цей об'єкт буде експортуватися сюди, і звідси вже пропсами буде передаватися у відповідні компоненти. Дуже важливо навчитися не заплутуватися в цій передачі, адже сам об'єкт з даними буде складний, і самі шляхи будуть не короткими до відповідних компонент. Але це дуже спрощує подальшу роботу, адже дані будуть в окремому файлі оброблятися. Там ми їх змінимо, і відразу все відобразиться на сторінці





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App Data = {state}/>
      </React.StrictMode>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

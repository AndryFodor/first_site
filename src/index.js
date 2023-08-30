import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
// import StoreContext from './StoreContext';
import { Provider } from 'react-redux';

// Цей файл необхідний для того, аби між index.js i state.js не виникало циклічної залежності, тобто щоб вони не залежали одна від одної. Адже index.js вже залежить від state.js, коли імпортує звідти дані.
// Якщо state.js буде імпортувати від index.js функцію rerenderEntireTree - то вони будуть взаємозалежними. А це суворо заборонено, адже це призведе до великих помилок в подальшому. Тому створюємо окремий файл render.js.
// І обидва, state.js i index.js будуть залежати саме від нього. rerenderEntireTree буде звідси імпортуватися в обидва файли. І далі програма працюватиме згідно з методом FLUX. При зміні UI дані передаються в BLL і тут опрацьовуються. Потім, коли вже дані оновлені, знову викликається функція rerenderEntireTree і перемальовує сайт з оновленими даними. Такий принцип FLUX. Його реалізація - Redux

// Але насправді все це так не робиться. Це ми зробили для розуміння проблеми. Вирішуються вони за допомогою такого способу паттернів. Таким чином не виникає циклічних залежностей import (state.js нічого не імпортує з index.js, при чому index.js імпортує в себе дані з state.js)

const root = ReactDOM.createRoot(document.getElementById('root'));

// Важливо функції, які передаються з об'єкту store, забайндити. Тобто зробити для них потсійний контекст, адже в них використовується this. Таким чином вони завжди будуть викликатися в контексті storeЮ а не якомусь іншому (з цьою помилкою я достатньо таки стикнувся)

// №3 Огортаємо компоненту App в тег StoreContext.Provider із значенням value = store. Тепер store буде доступним в тегу <StoreContext.Consumer><StoreContext.Consumer/> як параметр анонімної функції в ній
// №4 Насправді в бібліотеці react-redux вже є готовий Provider, і він працює схожим чином до того, який ми написали. Важливо, шо тут треба передавати у Provider через пропси store через ім'я store, а не value, чи якесь інше (як було в мене, через що я довго не міг зрозуміти в чому помилка)

    root.render(
      <BrowserRouter> 
        {/* <React.StrictMode> */}
          <Provider store={store}>
          <App />
          </Provider>
        {/* </React.StrictMode> */}
      </BrowserRouter>
    );

// Важливо. Весь store, що був створений, майже ідентичний store з redux. Але я не написав геттер для state. І також метода dispatchEvent не існує, існує dispatch. Саме його треба байндити
// паттерн підписника працює таким чином, що не передає фкункції rerenderEntiryTree всередині себе state. Тому поки що можна виправити цю проблему таким чином
// store.subscribe(() => {
//   rerenderEntireTree();
// });
// №4 Тепер цей метод не потрібний, адже підписується тепер сам React-Redux за допомогою функції connect. Він 
// починає слідкувати за змінами лише конкретного шматку state, і таким чином перемальовує не все, а лише конкретний шматок сторінки

// rerenderEntireTree();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// Коментарі до першої та другої частини вивчення React (до 29 урока включно) я видаляю для того, аби було місце на нові коментарі, адже тепер вже наближається більше логіка і Redux
// Щоб їх подивитсия, треба повернутися на попередні коміти (ось останній - що мав коментарі: a4b11076e659011cd978f013a94004b59dd356c3)



import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';

// Цей файл необхідний для того, аби між index.js i state.js не виникало циклічної залежності, тобто щоб вони не залежали одна від одної. Адже index.js вже залежить від state.js, коли імпортує звідти дані.
// Якщо state.js буде імпортувати від index.js функцію rerenderEntireTree - то вони будуть взаємозалежними. А це суворо заборонено, адже це призведе до великих помилок в подальшому. Тому створюємо окремий файл render.js.
// І обидва, state.js i index.js будуть залежати саме від нього. rerenderEntireTree буде звідси імпортуватися в обидва файли. І далі програма працюватиме згідно з методом FLUX. При зміні UI дані передаються в BLL і тут опрацьовуються. Потім, коли вже дані оновлені, знову викликається функція rerenderEntireTree і перемальовує сайт з оновленими даними. Такий принцип FLUX. Його реалізація - Redux

// Але насправді все це так не робиться. Це ми зробили для розуміння проблеми. Вирішуються вони за допомогою такого способу паттернів. Таким чином не виникає циклічних залежностей import (state.js нічого не імпортує з index.js, при чому index.js імпортує в себе дані з state.js)

const root = ReactDOM.createRoot(document.getElementById('root'));

// Важливо функції, які передаються з об'єкту store, забайндити. Тобто зробити для них потсійний контекст, адже в них використовується this. Таким чином вони завжди будуть викликатися в контексті storeЮ а не якомусь іншому (з цьою помилкою я достатньо таки стикнувся)

let rerenderEntireTree = state => {
    root.render(
      <BrowserRouter> 
        <React.StrictMode>
          <App state = {state}
          dispatch = {store.dispatchEvent.bind(store)}  />
        </React.StrictMode>
      </BrowserRouter>
    );
}

store.subscribe(rerenderEntireTree);
rerenderEntireTree(store._state);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// Коментарі до першої та другої частини вивчення React (до 29 урока включно) я видаляю для того, аби було місце на нові коментарі, адже тепер вже наближається більше логіка і Redux
// Щоб їх подивитсия, треба повернутися на попередні коміти (ось останній - що мав коментарі: a4b11076e659011cd978f013a94004b59dd356c3)



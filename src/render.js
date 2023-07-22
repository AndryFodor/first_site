import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost } from './redux/state'

// Цей файл необхідний для того, аби між index.js i state.js не виникало циклічної залежності, тобто щоб вони не залежали одна від одної. Адже index.js вже залежить від state.js, коли імпортує звідти дані.
// Якщо state.js буде імпортувати від index.js функцію rerenderEntireTree - то вони будуть взаємозалежними. А це суворо заборонено, адже це призведе до великих помилок в подальшому. Тому створюємо окремий файл render.js.
// І обидва, state.js i index.js будуть залежати саме від нього. rerenderEntireTree буде звідси імпортуватися в обидва файли. І далі програма працюватиме згідно з методом FLUX. При зміні UI дані передаються в BLL і тут опрацьовуються. Потім, коли вже дані оновлені, знову викликається функція rerenderEntireTree і перемальовує сайт з оновленими даними. Такий принцип FLUX. Його реалізація - Redux

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {
    root.render(
      <BrowserRouter>
        <React.StrictMode>
          <App Data = {state} addPostFunc = {addPost}/>
        </React.StrictMode>
      </BrowserRouter>
    );
}
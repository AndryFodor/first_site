import reportWebVitals from './reportWebVitals';
import { rerenderEntireTree } from './render';
import state from './redux/state';

rerenderEntireTree(state);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// Коментарі до першої та другої частини вивчення React (до 29 урока включно) я видаляю для того, аби було місце на нові коментарі, адже тепер вже наближається більше логіка і Redux
// Щоб їх подивитсия, треба повернутися на попередні коміти (ось останній - що мав коментарі: a4b11076e659011cd978f013a94004b59dd356c3)



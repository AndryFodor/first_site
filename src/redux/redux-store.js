import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import ProfileReducer from "./profileReducer";
import DialogsReducer from "./dialogsReducer";
import FriendsReducer from "./friendsReducer";
import NewsReducer from "./newsReducer";
import usersReducer from "./usersReducer";
import authorizationReducer from "./authorizationReducer";
import thunk from "redux-thunk";
import appReducer from "./appReducer";

// npm i redux-thunk - встановили бібліотеку, яка дає доступ до middleware під назвою thunk. Тобто, втановлюючи між функцією dispatch і доступними методами цю прослойку, ми даємо можливість dispatch приймати не тільки об'єкт як мінімум з властивістю type, але й функції, так звані thunk, функції, які виконують асинхронні запити на сервер
// за допомогою такої функції ми комбінуємо всі reducer і кидаємо їх в store
let reducers = combineReducers({
    profilePage: ProfileReducer ,
    dialogsPage: DialogsReducer,
    friendsPage: FriendsReducer,
    newsPage: NewsReducer,
    usersPage: usersReducer,
    auth: authorizationReducer,
    appSettings: appReducer
})

// за допомогою бібіліотеки redux ми створюємо вже готовий store, який дуже схожий до нашого store
let store = legacy_createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;

import { combineReducers, legacy_createStore } from "redux";
import ProfileReducer from "./profileReducer";
import DialogsReducer from "./dialogsReducer";
import FriendsReducer from "./friendsReducer";
import NewsReducer from "./newsReducer";

// за допомогою такої функції ми комбінуємо всі reducer і кидаємо їх в store
let reducers = combineReducers({
    profilePage: ProfileReducer ,
    dialogsPage: DialogsReducer,
    friendsPage: FriendsReducer,
    newsPage: NewsReducer
})

// за допомогою бібіліотеки redux ми створюємо вже готовий store, який дуже схожий до нашого store
let store = legacy_createStore(reducers);

window.store = store;

export default store;

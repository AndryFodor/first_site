import { AuthorizationThunkCreator } from "./authorizationReducer";

const INITIALIZATION = 'socialNetwork/auth/INITIALIZATION';

const initialization = () => ({ type: INITIALIZATION});

export const initializationThC = () => {
    return async dispatch => {
        // кожний thunk вкінці кінців має повертати проміс, а тут він буде оброблятися методом all. В такому випадку, ініціалізація відбудеться лише тоді, коли всі проміси будуть виконані. Тут в метод all передається масив промісів, закінчення яких треба дочекатися. А метод then буде виконаний як звичайний проміс після всіх промісів
        await Promise.all( [ dispatch(AuthorizationThunkCreator())/*, dispatch(someOtherThunkCreator), ... */ ] )
        dispatch(initialization());
    
    }
};

const initialState = {
    initialized: false
},

    appReducer = (state = initialState, action) => {

        switch (action.type) {
            case INITIALIZATION:
                return {
                    ...state,
                    initialized: true
                }

            default:
                return state;
        }
    }

export default appReducer;
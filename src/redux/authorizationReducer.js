import { API } from "../API/api";

const AUTH_USER = 'AUTH_USER';

export const auth_user = (id, email, login) => ({type: AUTH_USER, authData: {id, email, login}});

export const AuthorizationThunkCreator = () => {
    return dispatch => {
        API.authMe()
        .then(res => {
                let {login, id, email} = res.data;
                if(res.resultCode === 0){
                    dispatch(auth_user(id, email, login));
                }
            })
    }
}
const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
},

authorizationReducer = (state = initialState, action) => {

    switch (action.type){
        case AUTH_USER: 
            return {
                ...state,
                ...action.authData,
                isAuth: true
            }
        default: 
            return state;
    }
}

export default authorizationReducer;
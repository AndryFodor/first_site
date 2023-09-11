const AUTH_USER = 'AUTH_USER';

export const auth_user = (id, email, login) => ({type: AUTH_USER, authData: {id, email, login}});

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
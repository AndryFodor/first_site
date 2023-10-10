import { API } from "../API/api";

const AUTH_USER = 'AUTH_USER',
    LOG_OUT = 'LOG_OUT',
    LOG_IN = 'LOG_IN',
    IS_ERROR = 'IS_ERROR';

const auth_user = (id, email, login) => ({ type: AUTH_USER, authData: { id, email, login } }),
    log_out = () => ({ type: LOG_OUT }),
    log_in = () => ({type: LOG_IN}),
    is_errror = err => ({type: IS_ERROR, err});

export const AuthorizationThunkCreator = () => {
    return dispatch => {
        API.authMe()
            .then(res => {
                let { login, id, email } = res.data;
                if (res.resultCode === 0) {
                    dispatch(auth_user(id, email, login));
                }
            })
    }
},
    LogOutThC = () => {
        return dispatch => {
            API.logOut()
                .then(res => {
                    if (res.data.resultCode === 0) {
                        dispatch(log_out());
                        console.log('You logged out')
                    }
                    else {
                        console.log(res);
                    }
                })
        }
    }
    ,
    LonInThC = (values) => {
        return dispatch => {
            values = {
                ...values,
                captcha: true
            }
            API.logIn(values)
                .then(res => {
                    if (res.data.resultCode === 0) {
                        console.log('success');
                        dispatch(log_in());
                        dispatch(AuthorizationThunkCreator());
                    } else {
                        console.log('error: ', res);
                        dispatch(is_errror(res.data.messages));
                    }
                })
        }
    }

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    errors: ''
},

    authorizationReducer = (state = initialState, action) => {

        switch (action.type) {
            case AUTH_USER:
                return {
                    ...state,
                    ...action.authData,
                    isAuth: true
                }
            case LOG_OUT:
                return {
                    ...state,
                    isAuth: false,
                    id: null,
                    email: null,
                    login: null
                }
            case LOG_IN:
                return {
                    ...state,
                    errors: ''
                }
            case IS_ERROR:
                return {
                    ...state,
                    errors: action.err
                }

            default:
                return state;
        }
    }

export default authorizationReducer;
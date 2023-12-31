import { API } from "../API/api";

const AUTH_USER = 'socialNetwork/auth/AUTH_USER',
    LOG_OUT = 'socialNetwork/auth/LOG_OUT',
    LOG_IN = 'socialNetwork/auth/LOG_IN'

const auth_user = (id, email, login) => ({ type: AUTH_USER, authData: { id, email, login } }),
    log_out = () => ({ type: LOG_OUT }),
    log_in = () => ({ type: LOG_IN })

export const AuthorizationThunkCreator = () => {
    return async dispatch => {
        const res = await API.authMe();
        let { login, id, email } = res.data;
        if (res.resultCode === 0) {
            dispatch(auth_user(id, email, login));
        }
    }
},
    LogOutThC = () => {
        return async dispatch => {
            const res = await API.logOut()
            if (res.data.resultCode === 0) {
                dispatch(log_out());
                console.log('You logged out')
            }
            else {
                console.log(res);
            }
        }
    }
    ,
    LonInThC = (values, { setStatus }) => {
        return async dispatch => {
            values = {
                ...values,
                captcha: true
            }
            const res = await API.logIn(values)
            if (res.data.resultCode === 0) {
                console.log('success');
                dispatch(log_in());
                dispatch(AuthorizationThunkCreator());
            } else {
                console.log('error: ', res);
                // У функцію, яка передається в onSubmit, також в параметрах приходить так звана функція setStatus, яка передає в параметр status своєї форми повідомлення. Це повідомлення передається таким чином, як зроблено нижче. Також важливо повернути значення, адже просто так воно не повернеться
                return setStatus(res.data.messages);
            }
        }
    }

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
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
                    ...state
                }

            default:
                return state;
        }
    }

export default authorizationReducer;
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"

// HOC - це функція, яка приймає компоненту, і повертає нову компоненту на основі прийнятої
const withAuthRedirect = Component => {

    let AuthRedirect = props => {
        if(!props.isAuth){
            return <Navigate to={'/login'}/>
        }else{
            return <Component { ...props} />
        }
    },
    mapStateToProps = state => {
        return {
            isAuth: state.auth.isAuth
        }
    }

    AuthRedirect = connect(mapStateToProps)(AuthRedirect);

    return AuthRedirect;
}

export default withAuthRedirect;
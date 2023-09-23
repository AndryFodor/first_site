import { connect } from "react-redux"
import { Navigate } from "react-router-dom"

// HOC - це функція, яка приймає компонента, і повертає нового компонента на основі прийнятого. Але формально HOC - це теж компонент
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
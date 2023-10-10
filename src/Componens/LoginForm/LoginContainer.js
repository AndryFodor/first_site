import { connect } from "react-redux";
import { LonInThC } from "../../redux/authorizationReducer";
import {LoginPage} from "./LoginPage";



let mapStateToProps = state => ({
    errors: state.auth.errors,
    iaAuth: state.auth.isAuth
});

export const LoginContainer = connect(mapStateToProps, {LonInThC})(LoginPage);

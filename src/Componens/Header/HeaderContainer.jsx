import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { AuthorizationThunkCreator } from "../../redux/authorizationReducer";

// властивість об'єкта в гетзапиті withCredentials означає, що з цим запитом на сервер треба відправляти файли cookie
class CHeaderContainer extends React.Component  {
    componentDidMount(){
        this.props.AuthorizationThunkCreator();
    }
    render(){
        return <Header { ...this.props} />
    }
}

const mapStateToProps = state => ({isAuth: state.auth.isAuth, login: state.auth.login});


export const HeaderContainer = connect(mapStateToProps, {AuthorizationThunkCreator})(CHeaderContainer);
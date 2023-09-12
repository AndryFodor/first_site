import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { auth_user } from "../../redux/authorizationReducer";
import { API } from "../../API/api";

// властивість об'єкта в гетзапиті withCredentials означає, що з цим запитом на сервер треба відправляти файли cookie
class CHeaderContainer extends React.Component  {

    componentDidMount(){
        
        API.authMe()
        .then(res => {
                let {login, id, email} = res.data;
                if(res.resultCode === 0){
                    this.props.auth_user(id, email, login)
                }
            })
    }

    render(){
        return <Header { ...this.props} />
    }
}

const mapStateToProps = state => ({isAuth: state.auth.isAuth, login: state.auth.login})



export const HeaderContainer = connect(mapStateToProps, {auth_user})(CHeaderContainer);
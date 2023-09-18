import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { profilePageLoadingThunkCreator} from '../../redux/profileReducer';
import { Navigate, useParams } from 'react-router-dom';

// Колись в бібліотеці 'react-router-dom' існувала функція withRouter, яка передавала у компоненту, яку їй передана параметром, всю інформацію з адресної сторінки. Але тепер на заміну прийшли гуки, які не можна використовувати в класових компонентах. Таким чином, щоб тут можна було прочитати з адреса id користувача, необхідно робити такі махінації з гуками. UseParams передасть у пропсах необхідні параметри, які потім при потребі можна буде зчитати і використати, де потрібно
export function withRouter(Children){
  return(props)=>{

     const match  = {params: useParams()};
     return <Children {...props}  match = {match}/>
 }
}

// якщо користувач не ввійшов в акаунт, то нема сенсу малювати цю сторінку, адже користувач не має акаунту. В такому випадку використовується компонента Navigate, яка виконує переадресацію на сторінку login. Якщо користувач не ввійшов в систему, не потрібно також виконувати запит на сервер, адже він в такому випадку видасть помилку з кодом 400
class CProfileContainer extends React.Component {

  componentDidMount = () => {
    if(this.props.isAuth)
    this.props.profilePageLoadingThunkCreator(this.props.match.params.userId)
  }

  render () {
    if(!this.props.isAuth) return <Navigate to={'/login'} />
    return <Profile  { ...this.props} profile = {this.props.profile} />
  }
}

const mywithRouterComponent = withRouter(CProfileContainer)

const mapStateToProps = state => ({profile: state.profilePage.profile, isAuth: state.auth.isAuth});

const ProfileContainer = connect(mapStateToProps, {profilePageLoadingThunkCreator})(mywithRouterComponent);

export default ProfileContainer;
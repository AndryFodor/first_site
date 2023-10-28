import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserStatusThC, profilePageLoadingThunkCreator, updateStatusThC} from '../../redux/profileReducer';
import { Navigate, useParams } from 'react-router-dom';
import { compose } from 'redux';

// Колись в бібліотеці 'react-router-dom' існувала функція withRouter, яка передавала у компоненту, яку їй передана параметром, всю інформацію з адресної сторінки. Але тепер на заміну прийшли гуки, які не можна використовувати в класових компонентах. Таким чином, щоб тут можна було прочитати з адреса id користувача, необхідно робити такі махінації з гуками. UseParams передасть у пропсах необхідні параметри, які потім при потребі можна буде зчитати і використати, де потрібно
export function withRouter(Children){
  return(props)=>{ 
     const match  = {params: useParams()};
    //  У випадку, коли в адресному рядочку нема id користувача, чий профіль ми відкриваємо, ця функція не передасть ніяке число в match.params.userId. В такому випадку, оскільки я не знаю іншого виходу, встановлю це число вручну
    if(!match.params.userId) {
      match.params.userId = props.id;
    }
     return <Children {...props}  match = {match}  />
 }
}

// якщо користувач не ввійшов в акаунт, то нема сенсу малювати цю сторінку, адже користувач не має акаунту. В такому випадку використовується компонента Navigate, яка виконує переадресацію на сторінку login. Якщо користувач не ввійшов в систему, не потрібно також виконувати запит на сервер, адже він в такому випадку видасть помилку з кодом 400
class CProfileContainer extends React.Component {

  componentDidMount = () => {
    if(this.props.match.params.userId){
      this.props.profilePageLoadingThunkCreator(this.props.match.params.userId);
      // початкова ініціалізація значення статуса відбувається тут
      this.props.setUserStatusThC(this.props.match.params.userId);
    }

  }

  render () {
    // завдяки цій логіці у випадку, коли користувач не залогінений, він не може побачити свій профіль, але може переглядати профеля інших користувачів
    if(!this.props.match.params.userId){
      return <Navigate to={"/login"} replace = {true} />
    }
    return <Profile  { ...this.props} profile = {this.props.profile} status = {this.props.status} updateStatus = {this.props.updateStatusThC}/>
  }
}




const mapStateToProps = state => {
  // Це зроблено для того, щоб показати, що навіть якщо в userReducer змінився стейт, то все рівно функція mapStateToProps спрацювала тут, і в інших місцях. Тобто, ця функція працює завжди при зміні стейта. А стейт це поле одного об'єкта store, тому його не варто розділяти, від спільний для всього додатку (щоб це побачити, треба розкоментувати setInterval в index.js)
  // console.log("Profile mapStateToProps")
  return {
    profile: state.profilePage.profile, 
    status: state.profilePage.status,
    id: state.auth.id
  }
};

// тут compose реалізовує таку вкладеність: connect(mapStateToProps, {profilePageLoadingThunkCreator})(withAuthRedirect(withRouter(CProfileContainer))). Звичайно, мможна було залишити такий рядочок. Але за допомогою функції compose ми можемо з легкістю прочитати і зрозуміти цю вкладеність
export default compose(
  connect(mapStateToProps, {profilePageLoadingThunkCreator, setUserStatusThC, updateStatusThC}),
  withRouter
)
(CProfileContainer)

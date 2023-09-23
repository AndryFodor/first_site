import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { profilePageLoadingThunkCreator} from '../../redux/profileReducer';
import { useParams } from 'react-router-dom';
import withAuthRedirect from '../../HOC/withAuthRedirect';
import { compose } from 'redux';

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
    this.props.profilePageLoadingThunkCreator(this.props.match.params.userId)
  }

  render () {
    return <Profile  { ...this.props} profile = {this.props.profile} />
  }
}



const mapStateToProps = state => ({profile: state.profilePage.profile});

// тут compose реалізовує таку вкладеність: connect(mapStateToProps, {profilePageLoadingThunkCreator})(withAuthRedirect(withRouter(CProfileContainer))). Звичайно, мможна було залишити такий рядочок. Але за допомогою функції compose ми можемо з легкістю прочитати і зрозуміти цю вкладеність
export default compose(
  connect(mapStateToProps, {profilePageLoadingThunkCreator}),
  withAuthRedirect,
  withRouter
)
(CProfileContainer)

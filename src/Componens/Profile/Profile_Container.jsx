import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import axios from 'axios';
import { setUserProfile } from '../../redux/profileReducer';
import { useParams } from 'react-router-dom';

// Колись в бібліотеці 'react-router-dom' існувала функція withRouter, яка передавала у компоненту, яку їй передана параметром, всю інформацію з адресної сторінки. Але тепер на заміну прийшли гуки, які не можна використовувати в класових компонентах. Таким чином, щоб тут можна було прочитати з адреса id користувача, необхідно робити такі махінації з гуками. UseParams передасть у пропсах необхідні параметри, які потім при потребі можна буде зчитати і використати, де потрібно
export function withRouter(Children){
  return(props)=>{

     const match  = {params: useParams()};
     return <Children {...props}  match = {match}/>
 }
}

class CProfileContainer extends React.Component {

  componentDidMount = () => {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
    .then(res => {
      debugger
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId ? this.props.match.params.userId: res.data.data.id}`)
      .then(resolve => {
        this.props.setUserProfile(resolve.data);
      })
    })
    
  }

  render () {
    return <Profile  { ...this.props} profile = {this.props.profile} />
  }
}

const mywithRouterComponent = withRouter(CProfileContainer)

const mapStateToProps = state => ({profile: state.profilePage.profile});

const ProfileContainer = connect(mapStateToProps, {setUserProfile})(mywithRouterComponent);

export default ProfileContainer;
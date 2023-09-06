import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import axios from 'axios';
import { setUserProfile } from '../../redux/profileReducer';
import { useParams } from 'react-router-dom';

export function withRouter(Children){
  return(props)=>{

     const match  = {params: useParams()};
     return <Children {...props}  match = {match}/>
 }
}

class CProfileContainer extends React.Component {

  componentDidMount = () => {
    
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId ? this.props.match.params.userId: 2}`)
    .then(resolve => {
      this.props.setUserProfile(resolve.data);
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
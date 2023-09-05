import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import axios from 'axios';
import { setUserProfile } from '../../redux/profileReducer';

class CProfileContainer extends React.Component {

  componentDidMount = () => {
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
    .then(resolve => {
      this.props.setUserProfile(resolve.data);
    })
  }

  render () {
    return <Profile  { ...this.props} profile = {this.props.profile} />
  }
}





const mapStateToProps = state => ({profile: state.profilePage.profile});

const ProfileContainer = connect(mapStateToProps, {setUserProfile})(CProfileContainer);

export default ProfileContainer;
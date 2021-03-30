import React from 'react'
import Profile from './profile'
import { connect } from 'react-redux';
import {addPost, setProfile, toggleIsFetching, getProfile, getStatus, updateStatus} from '../../redux/reducers/profileReducer'
import Loader from '../common/loader/loader';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../../hocs/withAuthRedirect';
import { compose } from 'redux';

const mapStatetoProps = (state)=>{
  return {
     profileInformation: {...state.profilesPage.profileInformation},
     arrFriends: state.profilesPage.arrFriends,
     arrPosts: state.profilesPage.arrPosts,
     isFetching: state.profilesPage.isFetching,
     authId: state.auth.id
  }
}

class ProfileContainer extends React.Component {
  componentDidMount = () => {
    let id = this.props.match.params.userID?this.props.match.params.userID:this.props.authId
    this.props.getStatus(id)
    this.props.getProfile(id)
  }

  render() {
     if(this.props.isFetching) return <Loader />
     return <Profile {...this.props}/>
   }
}


export default compose(
  withAuthRedirect,
  connect(mapStatetoProps, {setProfile, addPost, toggleIsFetching, getProfile, getStatus, updateStatus}),
  withRouter
)(ProfileContainer)
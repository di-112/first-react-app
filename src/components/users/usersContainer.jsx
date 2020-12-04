import { connect } from "react-redux";
import { addFriend } from "../../redux/reducers/profileReducer";
import { follow, setCurrentPage, setUsers, unfollow, getUsers,
setCountPages, toggleIsFetching, setFollowingProgress } from "../../redux/reducers/usersReducer";
import Users from "./users";
import React from 'react'
import Loader from "../common/loader/loader";
import { compose } from "redux";
import withAuthRedirect from "../../hocs/withAuthRedirect";
import { getArrUsersSuper, getArrFollowingProgress, getArrFriends, getCountPages, getCurrentPage, getFollowingProgress, getIsFetching, getSizePage } from "../../redux/users-selectors";

class UsersContainer extends React.Component {

   componentDidMount = () => this.props.getUsers(this.props.currentPage,this.props.sizePage)
   
   changePage = (page) => this.props.getUsers(page,this.props.sizePage)

   followWithRequest = (user) => this.props.follow(user.id)
   
   unfollowWithRequest = (user) => this.props.unfollow(user.id)

   render () {
        if(this.props.isFetching)return  <Loader />
        else return <Users {...this.props} unfollow={this.unfollowWithRequest} follow={this.followWithRequest} changePage={this.changePage} />
   }
}

const mapStateToProps = (state) =>{
   return {
      users: getArrUsersSuper(state),
      friends: getArrFriends(state),
      currentPage: getCurrentPage(state),
      sizePage: getSizePage(state),
      countPages: getCountPages(state),
      isFetching: getIsFetching(state),
      followingProgress: getFollowingProgress(state),
      arrFollowingProgress: getArrFollowingProgress(state)
   }
}

export default compose(
   connect(mapStateToProps, {follow, unfollow, addFriend, setUsers, getUsers,
   setCurrentPage, setCountPages, toggleIsFetching, setFollowingProgress}),
   withAuthRedirect
)(UsersContainer)

import { connect } from "react-redux";
import { addFriend } from "../../redux/reducers/profileReducer";
import { follow, setCurrentPage, setUsers, unfollow, setCountPages } from "../../redux/reducers/usersReducer";
import Users from "./users";
import * as  axios from 'axios';
import React from 'react'



class UsersComponent extends React.Component {
   componentDidMount(){
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.sizePage}`).then( (response)=> {
      this.props.setUsers(response.data.items)
      this.props.setCountPages(Math.ceil(response.data.totalCount/this.props.sizePage))
      })
   }

   changePage = (page) =>{
      console.log(this.props)
      this.props.setCurrentPage(page)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.sizePage}`).then( (response)=> {this.props.setUsers(response.data.items)
      })
   }
 
   render(){
        return <Users 
           currentPage = {this.props.currentPage}
           changePage = {this.changePage}
           users = {this.props.users}
           friends = {this.props.friends}
           follow = {this.props.follow}
           unfollow = {this.props.unfollow}
           addFriend = {this.props.addFriend}
        />
      }
}

const mapStateToProps = (state) =>{
   return {
      users: state.usersPage.users,
      friends: state.profilesPage.arrFriends,
      currentPage: state.usersPage.currentPage,
      sizePage: state.usersPage.sizePage,
      countPages: state.usersPage.countPages
   }
}

/*
const mapDispatchToProps = (dispatch) =>{
   return {
      follow: (id)=>dispatch(followAC(id)),
      unfollow: (id)=>dispatch(unfollowAC(id)),
      addFriend: (friend)=>dispatch(addFriendCreator(friend)),
      setUsers: (users)=>dispatch(setUsersAC(users)),
      setCurrentPage: (currentPage)=>dispatch(setCurrentPageAC(currentPage)),
      setCountPages: (countPages)=>dispatch(setCountPagesAC(countPages))
   
   }
}
*/
export default connect(mapStateToProps, {follow, unfollow, addFriend, setUsers, setCurrentPage, setCountPages})(UsersComponent)
import { connect } from "react-redux";
import { addFriendCreator } from "../../redux/reducers/profileReducer";
import { followAC, setUsersAC, unfollowAC } from "../../redux/reducers/usersReducer";
import Users from "./usersClass";


const mapStateToProps = (state) =>{
   return {
      users: state.usersPage.users,
      friends: state.profilesPage.arrFriends
   }
}


const mapDispatchToProps = (dispatch) =>{
   return {
      follow: (id)=>dispatch(followAC(id)),
      unfollow: (id)=>dispatch(unfollowAC(id)),
      addFriend: (friend)=>dispatch(addFriendCreator(friend)),
      setUsers: (users)=>dispatch(setUsersAC(users))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
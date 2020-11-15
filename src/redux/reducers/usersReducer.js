const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const initialState = {
   users: [
      
   ]
}

const usersReducer = (state = initialState, action) => {
   let newState = {...state}
   switch(action.type){
      case FOLLOW: 
         newState.users = [...state.users].map( (user) => {
            if(user.id === action.userID)  user.followed=true
            return user
         })
         return newState
      case UNFOLLOW: 
         newState.users = [...state.users].map( (user) => {
            if(user.id === action.userID)  user.followed=false
            return user
         })
         return newState
      case SET_USERS: 
         newState.users = [...action.users]
      default: return newState
   }
      
}

export default usersReducer

export const followAC = (userID) => ({type: FOLLOW, userID})
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users) => ({type: SET_USERS, users})
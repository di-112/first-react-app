const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_COUNT_PAGES = 'SET_COUNT_PAGES'


const initialState = {
   users: [ ],
   currentPage: 1,
   sizePage: 15,
   countPages: 0
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
         return newState
      case SET_COUNT_PAGES: 
         newState.countPages = action.countPages
         return newState
      case SET_CURRENT_PAGE: 
         newState.currentPage = action.currentPage
         return newState
      default: return newState
   }
      
}

export default usersReducer

export const follow = (userID) => ({type: FOLLOW, userID})
export const unfollow = (userID) => ({type: UNFOLLOW, userID})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCountPages = (countPages) => ({type: SET_COUNT_PAGES, countPages})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
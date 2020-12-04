import {usersAPI} from "../../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_COUNT_PAGES = 'SET_COUNT_PAGES'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_FOLLOWING_PROGRESS = 'SET_FOLLOWING_PROGRESS'


const initialState = {
   users: [ {id:0, name:0, status:0, photos:0, followd: false }],
   currentPage: 1,
   sizePage: 15,
   countPages: 0,
   isFetching: false,
   followingProgress: false,
   arrFollowingProgress: []
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
      case TOGGLE_IS_FETCHING: 
         newState.isFetching = action.isFetching
         return newState
      case SET_FOLLOWING_PROGRESS: 
         return {
            ...newState,
            followingProgress: action.followingProgress,
            arrFollowingProgress: action.followingProgress? [...state.arrFollowingProgress, action.userID]
               :[...newState.arrFollowingProgress.filter(id=>id!==action.userID)]
         }
      default: return newState
   }
      
}

export default usersReducer

export const followSuccess = (userID) => ({type: FOLLOW, userID})
export const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCountPages = (countPages) => ({type: SET_COUNT_PAGES, countPages})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setFollowingProgress = (followingProgress, userID) => ({type: SET_FOLLOWING_PROGRESS, followingProgress, userID})

export const getUsers = (currentPage, sizePage) => (dispatch) => {
      dispatch(toggleIsFetching(true))
      usersAPI.getUsers(currentPage, sizePage).then( (data)=> {
         dispatch(toggleIsFetching(false))
         dispatch(setUsers(data.items))
         dispatch(setCurrentPage(currentPage))
         dispatch(setCountPages(Math.ceil(data.totalCount/sizePage)))
      })
   }


export const unfollow = (id) => (dispatch) => {
   dispatch(setFollowingProgress(true,id))     
   usersAPI.deleteFollow(id).then(data=>{
         if(data.resultCode === 0)dispatch(unfollowSuccess(id))
         dispatch(setFollowingProgress(false,id))
   })
}


export const follow = (id) => (dispatch) => {
   dispatch(setFollowingProgress(true,id))     
   usersAPI.postFollow(id).then(data=>{
         if(data.resultCode === 0)dispatch(followSuccess(id))
         dispatch(setFollowingProgress(false,id))
   })
}


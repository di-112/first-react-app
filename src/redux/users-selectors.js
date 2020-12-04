import { createSelector } from "reselect"

export const getArrUsers = (state) => state.usersPage.users
export const getArrUsersSuper =createSelector(getArrUsers, (users)=>{
   return users.filter(user => user)
})
export const getArrFriends = (state) => state.profilesPage.arrFriends
export const getCurrentPage = (state) => state.usersPage.currentPage
export const getSizePage = (state) => state.usersPage.sizePage
export const getCountPages = (state) => state.usersPage.countPages
export const getIsFetching = (state) => state.usersPage.isFetching
export const getFollowingProgress = (state) => state.usersPage.followingProgress
export const getArrFollowingProgress = (state) => state.usersPage.arrFollowingProgress
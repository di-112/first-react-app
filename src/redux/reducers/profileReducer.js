import { profileAPI } from '../../api/api'

const ADD_POST = 'ADD-POST'
const ADD_FRIEND = 'ADD_FRIEND'
const SET_PROFILE = 'SET_PROFILE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_STATUS = 'SET_STATUS'

const initialState = {
   arrPosts: [
     { message: 'Hello, it is my first post!', likes:  "23", img: "https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg"},
     { message: 'Hello, how are you?', likes: "23", img: "https://ae01.alicdn.com/kf/HTB1P2ToG79WBuNjSspeq6yz5VXaj/100-DIY-5D.jpg" },
     { message: 'Do it, man!!!', likes: "23", img: "https://pbs.twimg.com/profile_images/563771636076118016/GUQ_0-mU.png"},
     { message: 'Nice work', likes: "23", img: "https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg"},
     { message: 'Nice work', likes: "23", img: "https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg"},
     { message: 'Nice work', likes: "23", img: "https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg"},
     { message: 'Nice work', likes: "23", img: "https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg"},
     { message: 'Nice work', likes: "23", img: "https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg"},
     { message: 'Hello, it is my first post!', likes:  "23", img: "https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg"},
     { message: 'Hello, how are you?', likes: "23", img: "https://ae01.alicdn.com/kf/HTB1P2ToG79WBuNjSspeq6yz5VXaj/100-DIY-5D.jpg" },
     { message: 'Do it, man!!!', likes: "23", img: "https://pbs.twimg.com/profile_images/563771636076118016/GUQ_0-mU.png"},
     { message: 'Nice work', likes: "23", img: "https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg"},
     { message: 'Nice work', likes: "23", img: "https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg"},
     { message: 'Nice work', likes: "23", img: "https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg"},
     { message: 'Nice work', likes: "23", img: "https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg"},
     { message: 'Nice work', likes: "23", img: "https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg"},
     { message: 'Hello, it is my first post!', likes:  "23", img: "https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg"},
     { message: 'Hello, how are you?', likes: "23", img: "https://ae01.alicdn.com/kf/HTB1P2ToG79WBuNjSspeq6yz5VXaj/100-DIY-5D.jpg" },
     { message: 'Do it, man!!!', likes: "23", img: "https://pbs.twimg.com/profile_images/563771636076118016/GUQ_0-mU.png"},
     { message: 'Nice work', likes: "23", img: "https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg"},
     { message: 'Nice work', likes: "23", img: "https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg"},
     { message: 'Nice work', likes: "23", img: "https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg"},
     { message: 'Nice work', likes: "23", img: "https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg"},
     { message: 'Nice work', likes: "23", img: "https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg"}
   ],

   arrFriends: [
     {id: 1, name: 'Andrey', avatar: 'https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg'},
     {id: 2, name: 'Lena',   avatar: "https://ae01.alicdn.com/kf/HTB1P2ToG79WBuNjSspeq6yz5VXaj/100-DIY-5D.jpg"},
     {id: 3, name: 'Vadim',  avatar: "https://pbs.twimg.com/profile_images/563771636076118016/GUQ_0-mU.png" },
     {id: 4, name: 'Kate',   avatar: "https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg" },
     {id: 5, name: 'Andrey', avatar: 'https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg' },
     {id: 6, name: 'Lena',   avatar: "https://ae01.alicdn.com/kf/HTB1P2ToG79WBuNjSspeq6yz5VXaj/100-DIY-5D.jpg" },
     {id: 7, name: 'Vadim',  avatar: "https://pbs.twimg.com/profile_images/563771636076118016/GUQ_0-mU.png" },
     {id: 8, name: 'Kate',   avatar: "https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg" },
     {id: 9, name: 'Andrey', avatar: 'https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg' },
     {id: 10, name: 'Lena',   avatar: "https://ae01.alicdn.com/kf/HTB1P2ToG79WBuNjSspeq6yz5VXaj/100-DIY-5D.jpg" },
     {id: 11, name: 'Vadim',  avatar: "https://pbs.twimg.com/profile_images/563771636076118016/GUQ_0-mU.png" },
     {id: 12, name: 'Kate',   avatar: "https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg" },
     {id: 13, name: 'Andrey', avatar: 'https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg' },
     {id: 14, name: 'Lena',   avatar: "https://ae01.alicdn.com/kf/HTB1P2ToG79WBuNjSspeq6yz5VXaj/100-DIY-5D.jpg" },
     {id: 15, name: 'Vadim',  avatar: "https://pbs.twimg.com/profile_images/563771636076118016/GUQ_0-mU.png" },
     {id: 16, name: 'Kate',   avatar: "https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg"},
     {id: 17, name: 'Andrey', avatar: 'https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg'},
     {id: 18, name: 'Lena',   avatar: "https://ae01.alicdn.com/kf/HTB1P2ToG79WBuNjSspeq6yz5VXaj/100-DIY-5D.jpg"},
     {id: 19, name: 'Vadim',  avatar: "https://pbs.twimg.com/profile_images/563771636076118016/GUQ_0-mU.png" },
     {id: 20, name: 'Kate',   avatar: "https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg" },
     {id: 21, name: 'Andrey', avatar: 'https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg' },
     {id: 22, name: 'Lena',   avatar: "https://ae01.alicdn.com/kf/HTB1P2ToG79WBuNjSspeq6yz5VXaj/100-DIY-5D.jpg" },  
   ],

   profileInformation: {
      fullName: 'Incognito',
      lookingForAJob: false,
      userId: 0,
      status: '',
      photos: {
      },
      contacts: {}
   },
   isFetching: false
 }

const profileReducer = (state = initialState, action) => {
   let newState = {...state}
   switch(action.type){
      case ADD_POST: 
         newState.arrPosts = [...state.arrPosts]
         newState.arrPosts.unshift(
         { message: action.message, likes:  "0", img: "https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg"},
         )
         break
      case ADD_FRIEND: 
         newState.arrFriends = [...state.arrFriends, action.friend];
         break
       case SET_PROFILE: 
         newState.profileInformation.fullName = action.profileInformation.fullName
         newState.profileInformation.userId = action.profileInformation.userId
         newState.profileInformation.lookingForAJob = action.profileInformation.lookingForAJob
         newState.profileInformation.contacts = {... action.profileInformation.contacts}
         newState.profileInformation.photos = {...action.profileInformation.photos};
         break  
      case SET_STATUS: 
         newState.profileInformation.status = action.status
         break 
      case TOGGLE_IS_FETCHING: 
         newState.isFetching = action.isFetching
         return newState  
      default: break   
   }
   return newState
}

export default profileReducer

export const addPost = (message) => ({type: ADD_POST, message})
export const addFriend = (friend) => ({type: ADD_FRIEND, friend})
export const setProfile = (profileInformation) => ({type: SET_PROFILE, profileInformation})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getProfile = (id) => (dispatch) =>{
   dispatch(toggleIsFetching(true))
   profileAPI.getProfile(id).then((data)=>{
      dispatch(toggleIsFetching(false))
      dispatch(setProfile(data))
   })
}


export const getStatus = (id) => (dispatch) =>{
   profileAPI.getStatus(id).then((status)=>{
      dispatch(setStatus(status.data))
  })
}


export const updateStatus = (status) => (dispatch) =>{
  dispatch(toggleIsFetching(true)) 
  profileAPI.updateStatus(status).then((response)=>{
      if(response.data.resultCode===0){ dispatch(setStatus(status))
      }
      dispatch(toggleIsFetching(false))
   })
}


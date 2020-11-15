const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_VALUE = 'UPDATE-NEW-POST-VALUE'
const ADD_FRIEND = 'ADD_FRIEND'
//const REMOVE_FRIEND = 'REMOVE_FRIEND'

/*
const _addPost = (state) => {
   if(!state.newPostCurrentValue)alert('Please, enter something...')
   else {
      state.arrPosts.unshift(
       { message: state.newPostCurrentValue, likes:  "0", img: "https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg"},
     )
     state.newPostCurrentValue = ''
   } 
}

const _updateNewPostValue = (state, text) => state.newPostCurrentValue = text;*/

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

   aboutMe: {
     name: 'Incornito',
     city: 'Chickago',
     age: '25'
   },
   newPostCurrentValue: ''
 }

const profileReducer = (state = initialState, action) => {
   let newState = {...state}
   switch(action.type){
      case ADD_POST: 
         if(!state.newPostCurrentValue)alert('Please, enter something...')
         else {
            newState.arrPosts = [...state.arrPosts]
            newState.arrPosts.unshift(
            { message: newState.newPostCurrentValue, likes:  "0", img: "https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg"},
            )
            newState.newPostCurrentValue = ''
         } 
         break
      case UPDATE_NEW_POST_VALUE: 
         newState.newPostCurrentValue = action.text;
         break
      case ADD_FRIEND: 
         newState.arrFriends = [...state.arrFriends, action.friend];
         break
     /* case REMOVE_FRIEND: 
         newState.arrFriends = [...state.arrFriends].filter((friend)=>friend!=action.friend.id);
         break*/
      default: break   
   }
   return newState
}

export default profileReducer


export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostValueCreator = (text) => ({type: UPDATE_NEW_POST_VALUE, text})
export const addFriendCreator = (friend) => ({type: ADD_FRIEND, friend})
const ADD_MESSAGE = 'ADD-MESSAGE'
  
const initialState = {
   
   arrDialogs: [
      {name: 'Andrey', avatar: 'https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg'},
      {name: 'Lena', avatar: 'https://ae01.alicdn.com/kf/HTB1P2ToG79WBuNjSspeq6yz5VXaj/100-DIY-5D.jpg'},
      {name: 'Vadim', avatar: 'https://pbs.twimg.com/profile_images/563771636076118016/GUQ_0-mU.png'},
      {name: 'Kate', avatar: 'https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg'},
      {name: 'Andrey', avatar: 'https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg'},
      {name: 'Lena', avatar: 'https://ae01.alicdn.com/kf/HTB1P2ToG79WBuNjSspeq6yz5VXaj/100-DIY-5D.jpg'},
      {name: 'Vadim', avatar: 'https://pbs.twimg.com/profile_images/563771636076118016/GUQ_0-mU.png'},
      {name: 'Kate', avatar: 'https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg'},
    
    ],
    
    arrMessages: [
      {content: 'Hi', avatar: 'https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg'},
      {content: 'Wtf', avatar: 'https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg'},
      {content: 'Who are you?', avatar: 'https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg'},
      {content: 'Yo', avatar: 'https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg'},
      {content: 'Wow', avatar: 'https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg'},
      {content: 'Yo', avatar: 'https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg'},
      {content: 'Wow', avatar: 'https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg'},
      {content: 'Hello', avatar: 'https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg'},
      {content: 'Let is go!', avatar: 'https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg'},
    ]

}

const dialogsReducer = (state=initialState, action) => {
   const newState = {...state}
   switch(action.type){
      case ADD_MESSAGE:
         newState.arrMessages = [...state.arrMessages]
         newState.arrMessages.unshift(
            { content: action.message, avatar: 'https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg'},
         )       
         break
      default: break
   }
   return newState
}

export default dialogsReducer

export const addMessage = (message) => ({type: ADD_MESSAGE, message})

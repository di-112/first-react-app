const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_VALUE = 'UPDATE-NEW-MESSAGE-VALUE'

/*
const _addMessage = (state) => {
   if(!state.newMessageCurrentValue)alert('Please, enter something...')
   else {
      state.arrMessages.unshift(
       { content: state.newMessageCurrentValue, avatar: 'https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg'},
     )
     state.newMessageCurrentValue = ''
   }
 }

const _updateNewMessageValue = (state, text) => state.newMessageCurrentValue = text;*/
  
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
    ],

    newMessageCurrentValue: ''
}

const dialogsReducer = (state=initialState, action) => {
   switch(action.type){
      case ADD_MESSAGE:
         if(!state.newMessageCurrentValue)alert('Please, enter something...')
         else {
            state.arrMessages.unshift(
             { content: state.newMessageCurrentValue, avatar: 'https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg'},
           )
           state.newMessageCurrentValue = ''
         }
         break
      case UPDATE_NEW_MESSAGE_VALUE:
         state.newMessageCurrentValue = action.text;
         break
      default: break
   }
   return state
}

export default dialogsReducer

export const addMessageCreator = () => ({type: 'ADD-MESSAGE'})
export const updateNewMessageValueCreator  = (text) => ({type: 'UPDATE-NEW-MESSAGE-VALUE', text: text})

const store = {
  data: {
      dialogsPage: {

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
        },

      profilesPage: {
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
            {name: 'Andrey', avatar: 'https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg'},
            {name: 'Lena',   avatar: "https://ae01.alicdn.com/kf/HTB1P2ToG79WBuNjSspeq6yz5VXaj/100-DIY-5D.jpg"},
            {name: 'Vadim',  avatar: "https://pbs.twimg.com/profile_images/563771636076118016/GUQ_0-mU.png" },
            {name: 'Kate',   avatar: "https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg" },
            {name: 'Andrey', avatar: 'https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg' },
            {name: 'Lena',   avatar: "https://ae01.alicdn.com/kf/HTB1P2ToG79WBuNjSspeq6yz5VXaj/100-DIY-5D.jpg" },
            {name: 'Vadim',  avatar: "https://pbs.twimg.com/profile_images/563771636076118016/GUQ_0-mU.png" },
            {name: 'Kate',   avatar: "https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg" },
            {name: 'Andrey', avatar: 'https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg' },
            {name: 'Lena',   avatar: "https://ae01.alicdn.com/kf/HTB1P2ToG79WBuNjSspeq6yz5VXaj/100-DIY-5D.jpg" },
            {name: 'Vadim',  avatar: "https://pbs.twimg.com/profile_images/563771636076118016/GUQ_0-mU.png" },
            {name: 'Kate',   avatar: "https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg" },
            {name: 'Andrey', avatar: 'https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg' },
            {name: 'Lena',   avatar: "https://ae01.alicdn.com/kf/HTB1P2ToG79WBuNjSspeq6yz5VXaj/100-DIY-5D.jpg" },
            {name: 'Vadim',  avatar: "https://pbs.twimg.com/profile_images/563771636076118016/GUQ_0-mU.png" },
            {name: 'Kate',   avatar: "https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg"},
            {name: 'Andrey', avatar: 'https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg'},
            {name: 'Lena',   avatar: "https://ae01.alicdn.com/kf/HTB1P2ToG79WBuNjSspeq6yz5VXaj/100-DIY-5D.jpg"},
            {name: 'Vadim',  avatar: "https://pbs.twimg.com/profile_images/563771636076118016/GUQ_0-mU.png" },
            {name: 'Kate',   avatar: "https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg" },
            {name: 'Andrey', avatar: 'https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg' },
            {name: 'Lena',   avatar: "https://ae01.alicdn.com/kf/HTB1P2ToG79WBuNjSspeq6yz5VXaj/100-DIY-5D.jpg" },
            {name: 'Vadim',  avatar: "https://pbs.twimg.com/profile_images/563771636076118016/GUQ_0-mU.png" },
            {name: 'Kate',   avatar: "https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg" },
            {name: 'Andrey', avatar: 'https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg' },
            {name: 'Lena',   avatar: "https://ae01.alicdn.com/kf/HTB1P2ToG79WBuNjSspeq6yz5VXaj/100-DIY-5D.jpg" },
            {name: 'Vadim',  avatar: "https://pbs.twimg.com/profile_images/563771636076118016/GUQ_0-mU.png" },
            {name: 'Kate',   avatar: "https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg" },
            {name: 'Andrey', avatar: 'https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg' },
            {name: 'Lena',   avatar: "https://ae01.alicdn.com/kf/HTB1P2ToG79WBuNjSspeq6yz5VXaj/100-DIY-5D.jpg" },
            {name: 'Vadim',  avatar: "https://pbs.twimg.com/profile_images/563771636076118016/GUQ_0-mU.png" },
            {name: 'Kate',   avatar: "https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg"},
            {name: 'Andrey', avatar: 'https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg'},
            {name: 'Lena',   avatar: "https://ae01.alicdn.com/kf/HTB1P2ToG79WBuNjSspeq6yz5VXaj/100-DIY-5D.jpg"},
            {name: 'Vadim',  avatar: "https://pbs.twimg.com/profile_images/563771636076118016/GUQ_0-mU.png" },
            {name: 'Kate',   avatar: "https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg" },
            {name: 'Andrey', avatar: 'https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg' },
            {name: 'Lena',   avatar: "https://ae01.alicdn.com/kf/HTB1P2ToG79WBuNjSspeq6yz5VXaj/100-DIY-5D.jpg" },
            {name: 'Vadim',  avatar: "https://pbs.twimg.com/profile_images/563771636076118016/GUQ_0-mU.png" },
            {name: 'Kate',   avatar: "https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg" },
            {name: 'Andrey', avatar: 'https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg' },
            {name: 'Lena',   avatar: "https://ae01.alicdn.com/kf/HTB1P2ToG79WBuNjSspeq6yz5VXaj/100-DIY-5D.jpg" },
            {name: 'Vadim',  avatar: "https://pbs.twimg.com/profile_images/563771636076118016/GUQ_0-mU.png" },
            {name: 'Kate',   avatar: "https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg" },
            {name: 'Andrey', avatar: 'https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg' },
            {name: 'Lena',   avatar: "https://ae01.alicdn.com/kf/HTB1P2ToG79WBuNjSspeq6yz5VXaj/100-DIY-5D.jpg" },
            {name: 'Vadim',  avatar: "https://pbs.twimg.com/profile_images/563771636076118016/GUQ_0-mU.png" },
            {name: 'Kate',   avatar: "https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg"}
            
          ],

          aboutMe: {
            name: 'Incornito',
            city: 'Chickago',
            age: '25'
          },
          newPostCurrentValue: ''
        }
  },
    
  render() {},

  _addPost() {
      if(!this.data.profilesPage.newPostCurrentValue)alert('Please, enter something...')
      else {
        this.data.profilesPage.arrPosts.unshift(
          { message: this.data.profilesPage.newPostCurrentValue, likes:  "0", img: "https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg"},
        )
        this.data.profilesPage.newPostCurrentValue = ''
        this.render(this.data);
      } 
  },

  _addMessage() {
    if(!this.data.dialogsPage.newMessageCurrentValue)alert('Please, enter something...')
    else {
      this.data.dialogsPage.arrMessages.unshift(
        { content: this.data.dialogsPage.newMessageCurrentValue, avatar: 'https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg'},
      )
      this.data.dialogsPage.newMessageCurrentValue = ''
      this.render(this.data);
    }
  },

  _updateNewPostValue(text) {
    this.data.profilesPage.newPostCurrentValue = text;
    this.render(this.data)
  },

  _updateNewMessageValue(text) {
    this.data.dialogsPage.newMessageCurrentValue = text;
    this.render(this.data)
  },

  subscire(observer) {
    this.render = observer
  },

  dispatch(action) {
    if(action.type === 'ADD-POST')this._addPost()
    else if(action.type === 'UPDATE-NEW-POST-VALUE') this._updateNewPostValue(action.text)
    else if(action.type === 'ADD-MESSAGE')this._addMessage()
    else if(action.type === 'UPDATE-NEW-MESSAGE-VALUE')this._updateNewMessageValue(action.text)
  }

}

export const addPostCreator = () => ({type: 'ADD-POST'})
export const updateNewPostValueCreator = (text) => ({type: 'UPDATE-NEW-POST-VALUE', text: text})
export const addMessageCreator = () => ({type: 'ADD-MESSAGE'})
export const updateNewMessageValueCreator  = (text) => ({type: 'UPDATE-NEW-MESSAGE-VALUE', text: text})

export default store
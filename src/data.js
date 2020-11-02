import render from './render'

const data = {

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

}

const addPost = () =>{
  if(!data.profilesPage.newPostCurrentValue)alert('Please, enter something...')
  else {
    data.profilesPage.arrPosts.unshift(
      { message: data.profilesPage.newPostCurrentValue, likes:  "0", img: "https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg"},
    )
    data.profilesPage.newPostCurrentValue = ''
    render(data);
  }
}

const addMessage = () =>{
  if(!data.dialogsPage.newMessageCurrentValue)alert('Please, enter something...')
  else {
    data.dialogsPage.arrMessages.unshift(
      { content: data.dialogsPage.newMessageCurrentValue, avatar: 'https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg'},
    )
    data.dialogsPage.newMessageCurrentValue = ''
    render(data);
  }
}

const updateNewPostValue = (text) =>{
  data.profilesPage.newPostCurrentValue = text;
  render(data)
}

const updateNewMessageValue = (text) =>{
  data.dialogsPage.newMessageCurrentValue = text;
  render(data)
}

export const Functions = {
  addPost,
  addMessage,
  updateNewPostValue,
  updateNewMessageValue
}

export default data
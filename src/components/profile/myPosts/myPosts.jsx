import React from 'react'
import styles from './myPosts.module.css'
import Post from './Post/post'


const MyPosts = () =>{
   return (
      <div className={styles.profile__myPosts}>
           <Post message = 'Hello, it is my first post!' likes = "23" img="https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg"/>
           <Post message = 'Hello, how are you?' likes = "23" img="https://ae01.alicdn.com/kf/HTB1P2ToG79WBuNjSspeq6yz5VXaj/100-DIY-5D.jpg"/>
           <Post message = 'Do it, man!!!' likes = "23" img="https://pbs.twimg.com/profile_images/563771636076118016/GUQ_0-mU.png"/>
           <Post message = 'Nice work' likes = "23" img="https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg"/>
         </div>
   )
}

export default MyPosts
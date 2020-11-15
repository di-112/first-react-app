import React from 'react'
import styles from './users.module.css' 


let arrUsers = [
   {id: 0, name: 'Andrey', avatar:'https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg', followed: true, status: 'I am ok', city: 'Moskow'},
   {id: 1, name: 'Lena', avatar: "https://ae01.alicdn.com/kf/HTB1P2ToG79WBuNjSspeq6yz5VXaj/100-DIY-5D.jpg", followed: false, status: 'I am ok', city: 'SPB' },
   {id: 2, name: 'Vadim', avatar:"https://pbs.twimg.com/profile_images/563771636076118016/GUQ_0-mU.png", followed: false, status: 'I am ok', city: 'Tambov'},
   {id: 3, name: 'Kate', avatar:"https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg", followed: true, status: 'I am ok', city: 'Moskow'},
   {id: 4, name: 'Andrey', avatar:'https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg', followed: true, status: 'I am ok', city: 'Moskow'},
   {id: 5, name: 'Lena', avatar: "https://ae01.alicdn.com/kf/HTB1P2ToG79WBuNjSspeq6yz5VXaj/100-DIY-5D.jpg", followed: false, status: 'I am ok', city: 'SPB' },
   {id: 6, name: 'Vadim', avatar:"https://pbs.twimg.com/profile_images/563771636076118016/GUQ_0-mU.png", followed: false, status: 'I am ok', city: 'Tambov'},
   {id: 7, name: 'Kate', avatar:"https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg", followed: true, status: 'I am ok', city: 'Moskow'},
   {id: 8, name: 'Andrey', avatar:'https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg', followed: true, status: 'I am ok', city: 'Moskow'},
   {id: 9, name: 'Lena', avatar: "https://ae01.alicdn.com/kf/HTB1P2ToG79WBuNjSspeq6yz5VXaj/100-DIY-5D.jpg", followed: false, status: 'I am ok', city: 'SPB' },
   {id: 10, name: 'Vadim', avatar:"https://pbs.twimg.com/profile_images/563771636076118016/GUQ_0-mU.png", followed: false, status: 'I am ok', city: 'Tambov'},
   {id: 11, name: 'Kate', avatar:"https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg", followed: true, status: 'I am ok', city: 'Moskow'}

]

const Users = (props) => {
   if(props.users.length==0){
      props.setUsers(arrUsers)
   }
   return (
      <div className={styles.users}>
         {props.users.map( (user)=> {
            return  (
            <div className= {styles.user}>
               <div className={styles.logo}>
                  <img src={user.avatar} alt=""/>
                  <span>{user.name}</span>
                  <button  onClick={
                        user.followed?
                        ()=>{props.unfollow(user.id); props.addFriend({avatar: user.avatar, name: user.name, id: props.friends.length+1})}:
                        ()=>props.follow(user.id) 
                     } 
                  > {user.followed?'unfollow':'follow'}  </button>
               </div>
               <div className={styles.info}>
                  <div> status: <span>{user.status}</span></div>
                  <div>city: <span>{user.city}</span></div>
               </div>
            </div>
            )}
         )}
      </div>
   )
}

export default Users
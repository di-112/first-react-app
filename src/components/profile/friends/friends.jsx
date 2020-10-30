import React from 'react'
import Friend from './friend/friend'
import styles from './friends.module.css'

const Friends = () =>{
   return (
      <div className={styles.friends}>
         <h2 className={styles.friends__title}>Your friends:</h2>
         <div className={styles.friends__list}>
            <Friend name='Andrey' avatar='https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg'/>
            <Friend name = 'Lena' avatar="https://ae01.alicdn.com/kf/HTB1P2ToG79WBuNjSspeq6yz5VXaj/100-DIY-5D.jpg"/>
            <Friend name = 'Vadim'  avatar="https://pbs.twimg.com/profile_images/563771636076118016/GUQ_0-mU.png" />
            <Friend name = 'Kate' avatar="https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg"/>
            <Friend name='Andrey' avatar='https://i03.fotocdn.net/s121/f6dbed805aaf6dfa/user_l/2777981224.jpg'/>
            <Friend name = 'Lena' avatar="https://ae01.alicdn.com/kf/HTB1P2ToG79WBuNjSspeq6yz5VXaj/100-DIY-5D.jpg"/>
            <Friend name = 'Vadim'  avatar="https://pbs.twimg.com/profile_images/563771636076118016/GUQ_0-mU.png" />
            <Friend name = 'Kate' avatar="https://vk.vkfaces.com/837122/v837122490/4160f/3H3xw0ok9Qw.jpg"/>
         </div>
      </div>
   )
}

export default Friends
import React from 'react'
import Friend from './friend/friend'
import styles from './friends.module.css'

const Friends = (props) =>{
   return (
      <div className={styles.friends}>
         <h2 className={styles.friends__title}>Your friends:</h2>
         <div className={styles.friends__list}>

            {props.arrFriends.map(friend => {
               return ( <Friend name={friend.name} avatar={friend.avatar} />)
            })}

         </div>
      </div>
   )
}

export default Friends
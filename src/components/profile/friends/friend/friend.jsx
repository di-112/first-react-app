import React from 'react'
import styles from './friend.module.css'

const Friend = (props) =>{
   return (
      <div className={styles.friend}>
         <img src={props.avatar} alt="" className={styles.friend__avatar}/>
         <span className={styles.friend__name}>{props.name}</span>
      </div>
   )
}

export default Friend
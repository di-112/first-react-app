import React from 'react'
import styles from './message.module.css'

const Message = (props) => {
   return (
      <div className={styles.message}>
         <img src={props.avatar} alt="" className={styles.avatar}/>
         <p className={styles.content}>{props.content}</p>
      </div>
   )
}

export default Message
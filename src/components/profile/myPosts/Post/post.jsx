import React from 'react'
import styles from './post.module.css'

const Post = (props) =>{
   return (
      <div className={styles.post}>
         <img src={props.img} alt="" className={styles.post__logo}/>
         <div className={styles.post__content}>
            <span className={styles.post__comment}>{props.message}</span> 
            <span className={styles.post__likes}>Likes: {props.likes}</span> 
         </div>
      </div>
   )
}

export default Post
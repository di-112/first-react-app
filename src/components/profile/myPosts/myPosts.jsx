import React from 'react'
import styles from './myPosts.module.css'
import Post from './Post/post'

const MyPosts = (props) =>{
   return (
      <div className={styles.profile__myPosts}>
         <div className={styles.posts__add}>
            <textarea name="newPost" placeholder="New post..." ></textarea>
            <button className={styles.btn__addPost}>Add post</button>
         </div>
         <div className={styles.posts__list}>
            {props.arrPosts.map(post => {
               return   <Post message = {post.message} likes = {post.likes} img={post.img}/>
            })}
         </div>
         </div>
   )
}
export default MyPosts
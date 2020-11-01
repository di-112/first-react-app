import React from 'react'
import styles from './myPosts.module.css'
import Post from './Post/post'

const refOnTextArea = React.createRef();

const addPost = () => alert(refOnTextArea.current.value) 

const MyPosts = (props) =>{
   return (
      <div className={styles.profile__myPosts}>
         <div className={styles.posts__add}>
            <textarea ref={refOnTextArea} name="newPost" placeholder="New post..." ></textarea>
            <button onClick={addPost} className={styles.btn__addPost}>Add post</button>
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
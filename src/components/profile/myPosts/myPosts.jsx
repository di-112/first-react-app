import React from 'react'
import styles from './myPosts.module.css'
import Post from './Post/post'
import {updateNewPostValueCreator, addPostCreator} from './../../../data'

const refOnTextArea = React.createRef();

const MyPosts = (props) =>{

   const addPost = () => props.dispatch(addPostCreator()) 

   const updateNewPostValue = ()=> props.dispatch(updateNewPostValueCreator(refOnTextArea.current.value))
   
   return (
      <div className={styles.profile__myPosts}>
         <div className={styles.posts__add}>
            <textarea onChange={updateNewPostValue} ref={refOnTextArea} name="newPost" placeholder="New post..."  value={props.newPostCurrentValue}></textarea>
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
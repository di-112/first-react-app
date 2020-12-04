import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/formsControl/formsControl';
import { maxLengthCreator, required } from '../../common/formsValidators/validators';
import styles from './myPosts.module.css'
import Post from './Post/post'

const maxLength10 = maxLengthCreator(10)

const MyPostForm = (props) => {
   return (
      <form className={styles.form} onSubmit={props.handleSubmit}>
         <Field 
               placeholder="New post..."  
               name = 'post'
               component = {Textarea}
               validate = {[required, maxLength10]}
         />
         <button className={styles.btn__addPost}>Add post</button>
      </form>
   )
}

const MyPostFormRedux = reduxForm({form: 'addPostForm'})(MyPostForm)


const MyPosts = (props) =>{
   
   const addPost = (formData) => {
      console.log(formData)
      props.addPost(formData.post)
   }
   
   return (
      <div className={styles.profile__myPosts}>
         <div className={styles.posts__add}>
            <MyPostFormRedux onSubmit={addPost} {...props}/>
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
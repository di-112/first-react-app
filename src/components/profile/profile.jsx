import React from 'react'
import AboutMe from './aboutMe/aboutMe'
import Friends from './friends/friends'
import MyPosts from './myPosts/myPosts'
import styles from './profile.module.css'

const Profile = (props) =>{
   return (
      <div className={styles.profile}>
         <AboutMe aboutMe = {props.aboutMe}/>
         <MyPosts arrPosts = {props.arrPosts} 
         addPost = {props.addPost}
         newPostCurrentValue = {props.newPostCurrentValue}
         updateNewPostValue = {props.updateNewPostValue}
         />
         <Friends arrFriends = {props.arrFriends}/>
      </div>
   )
}

export default Profile
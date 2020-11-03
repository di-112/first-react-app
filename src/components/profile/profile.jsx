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
         newPostCurrentValue = {props.newPostCurrentValue}
         dispatch = {props.dispatch}
         />
         <Friends arrFriends = {props.arrFriends}/>
      </div>
   )
}

export default Profile
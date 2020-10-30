import React from 'react'
import AboutMe from './aboutMe/aboutMe'
import Friends from './friends/friends'
import MyPosts from './myPosts/myPosts'
import styles from './profile.module.css'

const Profile = () =>{
   return (
      <div className={styles.profile}>
         <AboutMe />
         <MyPosts />
         <Friends />
      </div>
   )
}

export default Profile
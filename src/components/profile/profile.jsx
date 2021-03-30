import React from 'react'
import MyPosts from './myPosts/myPosts'
import ProfileInformation from './profileInformation/profileInformation'
import Friends from './friends/friends'
import styles from './profile.module.css'


const Profile = (props) =>{
   return (
      <div className={styles.profile}>
         <ProfileInformation profileInformation={props.profileInformation} updateStatus={props.updateStatus}/>
         <MyPosts arrPosts={props.arrPosts} addPost = {props.addPost} />
         <Friends arrFriends={props.arrFriends}/>        
      </div>
   )
}

export default Profile
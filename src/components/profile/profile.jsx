import React from 'react'
import { connect } from 'react-redux'
import AboutMe from './aboutMe/aboutMe'
import Friends from './friends/friends'
import MyPostsContainer from './myPosts/myPostsContainer'
import styles from './profile.module.css'

const mapStatetoProps_AboutMe = (state)=>{
   return{
      aboutMe: state.profilesPage.aboutMe
   }
}

const mapStatetoProps_Friends = (state)=>{
   return{
      arrFriends: state.profilesPage.arrFriends
   }
}

const AboutMeContainer = connect(mapStatetoProps_AboutMe)(AboutMe) 

const FriendsContainer = connect(mapStatetoProps_Friends)(Friends) 

const Profile = (props) =>{
   return (
      <div className={styles.profile}>
         <AboutMeContainer />
         <MyPostsContainer />
         <FriendsContainer />
      </div>
   )
}

export default Profile
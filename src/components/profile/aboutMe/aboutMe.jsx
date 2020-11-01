import React from 'react'
import styles from './aboutMe.module.css'

const AboutMe = (props) =>{
    return (
    <div className={styles.profile__me}>
      <div className={styles.profile__logo}>
               <img src="https://sun9-68.userapi.com/c623327/v623327531/1497d/cjOaY-3CCLE.jpg" alt=""/>
               <span className={styles.profile__status}>Status: You can do it!!!</span>
      </div>
      <div className={styles.profile__info}>
            <span className={styles.profile__title}>My information:</span>
            <span>Name: {props.aboutMe.name}</span>
            <span>City: {props.aboutMe.city}</span>
            <span>Age:  {props.aboutMe.age}</span>
      </div>
   </div>
    )
}

export default AboutMe
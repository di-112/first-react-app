import React from 'react'
import styles from './aboutMe.module.css'

const AboutMe = () =>{
    return (
    <div className={styles.profile__me}>
      <div className={styles.profile__logo}>
               <img src="https://sun9-68.userapi.com/c623327/v623327531/1497d/cjOaY-3CCLE.jpg" alt=""/>
      </div>
      <div className={styles.profile__info}>
          <span className={styles.profile__title}>My information:</span>
          <span>Name: tst</span>
          <span>City: tst</span>
          <span>Age: 25</span>
      </div>
   </div>
    )
}

export default AboutMe
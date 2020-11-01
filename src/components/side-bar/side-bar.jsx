import React from 'react'
import styles from './side-bar.module.css'
import { NavLink } from 'react-router-dom'



const SideBar = () => {
   return (
      <nav>
         <ul className={styles.sideBar}>
            <li className={styles.sideBar__item}><NavLink to='/profile' activeClassName={styles.active}>profile</NavLink></li>
            <li className={styles.sideBar__item}><NavLink to='/dialogs/1' activeClassName={styles.active}>message</NavLink></li>
            <li className={styles.sideBar__item}>setting</li>
            <li className={styles.sideBar__item}>friends</li>
            <li className={styles.sideBar__item}>contact</li>
         </ul>
      </nav>
   )
}

export default SideBar
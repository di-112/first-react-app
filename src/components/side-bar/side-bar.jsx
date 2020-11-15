import React from 'react'
import styles from './side-bar.module.css'
import { NavLink } from 'react-router-dom'



const SideBar = () => {
   return (
      <nav>
         <ul className={styles.sideBar}>
            <li className={styles.sideBar__item}><NavLink to='/profile' activeClassName={styles.active}>profile</NavLink></li>
            <li className={styles.sideBar__item}><NavLink to='/dialogs' activeClassName={styles.active}>message</NavLink></li>
            <li className={styles.sideBar__item}>setting</li>
            <li className={styles.sideBar__item}>friends</li>
            <li className={styles.sideBar__item}><NavLink to='/users' activeClassName={styles.active}>all users</NavLink></li>
         </ul>
      </nav>
   )
}

export default SideBar
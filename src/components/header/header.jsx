import React from 'react'
import SideBar from '../side-bar/side-bar'
import styles from './header.module.css'

const pathLogo = 'https://free-images.com/or/8a4e/lion_head_isolated_art.jpg'

const Header = () => {
   return (
      <header className={styles.header}>
         <img className={styles.header__logo} src={pathLogo} alt='logo'></img>
         <SideBar />
      </header>
   )
}

export default Header
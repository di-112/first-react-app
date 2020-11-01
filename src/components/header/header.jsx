import React from 'react'
import SideBar from '../side-bar/side-bar'
import styles from './header.module.css'

const pathLogo = 'https://airshp.com/wp-content/uploads/AL1-LogoSuite2016-v3_MARK.png'

const Header = () => {
   return (
      <header className={styles.header}>
         <img className={styles.header__logo} src={pathLogo} alt='logo'></img>
         <SideBar />
      </header>
   )
}

export default Header
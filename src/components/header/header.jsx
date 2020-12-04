import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './header.module.css'

const pathLogo = 'https://airshp.com/wp-content/uploads/AL1-LogoSuite2016-v3_MARK.png'

const Header = (props) => {
   return (
      <header className={styles.header}>
         <img className={styles.header__logo} src={pathLogo} alt='logo'></img>
         <div className={styles.header__login}>
             {props.isAuth? <span>{'name: '+props.login+' id: '+props.id}<button onClick={props.deleteLogin}>Logout</button></span>:<NavLink to='/login'>Login</NavLink> }
         </div>
      </header>
   )
}

export default Header
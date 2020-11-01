import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './dialog.module.css'


const Dialog = (props) => {
   return <div className={styles.dialog}>
      <img src={props.avatar} alt="" className={styles.avatar}/>
      <NavLink to={`/dialogs/${props.id}`} className={styles.name}  activeClassName={styles.active} >{props.name}</NavLink>
   </div>
}

export default Dialog
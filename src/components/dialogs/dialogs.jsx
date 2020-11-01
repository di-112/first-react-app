import React from 'react'
import styles from './dialogs.module.css'
import Dialog from './dialog/dialog'
import Message from './message/message'
import { Route } from 'react-router-dom'

const Dialogs = (props) => {   
   return <div className={styles.dialogs}>
      <div className={styles.dialogs__list}>
           {props.arrDialogs.map((dialog,index) => {
              return <Dialog name = {dialog.name} avatar = {dialog.avatar} id={index+1}/>
           })}
      </div>
      <div className={styles.dialogs__messages}>
         {
         props.arrDialogs.map((dialog, id)=>{
               return props.arrMessages.map(message => {
               return <Route path={`/dialogs/${id+1}`} render = {()=>{
                  return <Message avatar = {dialog.avatar} content = {message.content} />
               }} />   
               })
             }
         )
         }
      </div>
   </div> 
}

export default Dialogs
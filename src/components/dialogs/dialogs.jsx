import React from 'react'
import styles from './dialogs.module.css'
import Dialog from './dialog/dialog'
import Message from './message/message'
import { Route } from 'react-router-dom'
import {addMessageCreator, updateNewMessageValueCreator} from './../../data'

const Dialogs = (props) => {   

   const refOnTextArea = React.createRef();

   const addMessage = () => props.dispatch(addMessageCreator())

   const updateNewMessageValue = () => props.dispatch(updateNewMessageValueCreator(refOnTextArea.current.value))

   return <div className={styles.dialogs}>
      <div className={styles.dialogs__list}>
           {props.arrDialogs.map((dialog,index) => {
              return <Dialog name = {dialog.name} avatar = {dialog.avatar} id={index+1}/>
           })}
      </div>
      <div className={styles.dialogs__messages}>                    
         {
            props.arrDialogs.map((item, id)=><Route path={`/dialogs/${id}`}  render = { () =>
               { 
                  return (
                     <div className={styles.messages__add}>
                     <textarea ref={refOnTextArea} name="newMessage" placeholder="New Message..." onChange={updateNewMessageValue} value={props.newMessageCurrentValue}></textarea>
                     <button onClick={addMessage} className={styles.btn__addMessage}>Add message</button>
                     </div>
               ) }
            } />)
         }       
         {
         props.arrDialogs.map((dialog, id)=>{
               return props.arrMessages.map(message => {
                  return(
                  <Route path={`/dialogs/${id+1}`} render = {()=>{
                     return <Message avatar = {dialog.avatar} content = {message.content} />
                  }} />  
                  ) 
               })
            }
         )
         }
      </div>
   </div> 
}

export default Dialogs
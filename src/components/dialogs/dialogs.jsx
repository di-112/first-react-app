import React from 'react'
import styles from './dialogs.module.css'
import Dialog from './dialog/dialog'
import Message from './message/message'
import { Route } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../common/formsValidators/validators'
import { Textarea } from '../common/formsControl/formsControl'


const maxLength200 = maxLengthCreator(200)

const DialogsForm = (props) => {
   
   return (
      <form onSubmit={props.handleSubmit}>
          <Field 
            name="message" 
            placeholder="New Message..." 
            component = {Textarea}
            validate ={[required, maxLength200]}
         />
         <button className={styles.btn__addMessage}>Add message</button>
      </form>
   )
} 


const DialogsFormRedux = reduxForm({form: 'addDialogsForm'})(DialogsForm)

const Dialogs = (props) => {   

   const addMessage = (formData) => {
      props.addMessage(formData.message)
   }
   
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
                        <DialogsFormRedux onSubmit={addMessage}{...props}/>
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
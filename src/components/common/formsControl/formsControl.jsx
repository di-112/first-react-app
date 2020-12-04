import React from 'react'
import styles from './formsControl.module.css'

export const Textarea = ({input, meta, ...props}) => {
   return (
      <div className={styles.formTextarea}>
         <textarea  className={meta.error&&meta.active?styles.error:''} {...input} {...props}/>
         {meta.error&&meta.active? <span className={styles.error__text}>{meta.error}</span>:''}
      </div>
   )
}

export const Input = ({input, meta, ...props}) => {
   return (
      <div className={styles.formInput}>
         <input  className={meta.error&&meta.touched?styles.error:''} {...input} {...props}/>
         {meta.error&&meta.touched? <span  className={styles.error__text}>{meta.error}</span>:''}
      </div>
   )
}

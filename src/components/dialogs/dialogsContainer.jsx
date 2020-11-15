import React from 'react'
import { connect } from 'react-redux';
import {addMessageCreator, updateNewMessageValueCreator} from '../../redux/reducers/dialogsReducer'
import Dialogs from './dialogs';

const mapStateToProps = (state) =>{
   return {
      arrDialogs: state.dialogsPage.arrDialogs,
      arrMessages: state.dialogsPage.arrMessages,
      newMessageCurrentValue: state.dialogsPage.newMessageCurrentValue
   }
}

const mapDispatchToProps = (dispatch) =>{
   return {
      addMessage: ()=> dispatch(addMessageCreator()),
      updateNewMessageValue: (text) => dispatch(updateNewMessageValueCreator(text))
   }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthRedirect from '../../hocs/withAuthRedirect';
import {addMessage} from '../../redux/reducers/dialogsReducer'
import Dialogs from './dialogs';

const mapStateToProps = (state) =>{
   return {
      arrDialogs: state.dialogsPage.arrDialogs,
      arrMessages: state.dialogsPage.arrMessages,

   }
}

export default compose(
   connect(mapStateToProps, {addMessage}),
   withAuthRedirect
)(Dialogs)
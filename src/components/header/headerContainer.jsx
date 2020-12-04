import React from 'react'
import { connect } from 'react-redux'
import Header from './header'
import {deleteLogin, getAuthInfo} from '../../redux/reducers/authReducer'



class HeaderCoponent extends React.Component {
   
   componentDidMount=()=> this.props.getAuthInfo()
   
   render = () =>  <Header {...this.props} /> 
   
}

const mapStateToProps=(state)=>{
   return {
      id: state.auth.id,
      email: state.auth.email,
      login: state.auth.login,
      isAuth: state.auth.isAuth
   }
}

export default connect(mapStateToProps, {getAuthInfo, deleteLogin})(HeaderCoponent)

import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { postLogin } from '../../redux/reducers/authReducer'
import { Input } from '../common/formsControl/formsControl'
import { required } from '../common/formsValidators/validators'
import Loader from '../common/loader/loader'
import styles from './login.module.css' 

const img = 'https://wallpapercave.com/wp/wp1842480.jpg'

const mapStateToProps = (state) =>({
   isAuth: state.auth.isAuth,
   isFetching: state.auth.isFetching
})

const LoginForm = (props) =>{
   return (
      <form className={styles.form} onSubmit={props.handleSubmit}>
         <Field placeholder='email' component={Input}  name='email'validate={required}/>
         <Field placeholder='password' component={Input} type='password' name='password' validate={required}/>
         <label><Field component='input' name='chekbox' type='checkbox'/> Remember me</label>
         {props.error?<span className={styles.error}>{props.error}</span>:''}
         <button>Login</button>   
      </form>
   )
}

const LoginFormRedux = reduxForm({form:'loginForm'})(LoginForm)

class Login extends React.Component{

   onSubmit = (formData) => this.props.postLogin(formData.email, formData.password, formData.chekbox)

   render(){
      if(this.props.isAuth) return <Redirect to='/profile' />
      if(this.props.isFetching) return <Loader />
      return <div className={styles.login}>
         <div className={styles.login__form}>
            <span className={styles.title}>Please, login in your accaunt</span>
            <img src={img} alt=""/>
            <LoginFormRedux onSubmit={this.onSubmit}/>
         </div>
      </div>
   } 
}  

export default connect(mapStateToProps, {postLogin})(Login)
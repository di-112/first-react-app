import './nule.css'
import './App.css';
import SideBar from './components/side-bar/side-bar';
import ProfileContainer from './components/profile/profileContainer';
import Footer from './components/footer/footer';
import Login from './components/login/login';
import { BrowserRouter, Redirect, Route, withRouter } from 'react-router-dom';
import DialogsContainer from './components/dialogs/dialogsContainer';
import UsersContainer from './components/users/usersContainer';
import HeaderContainer from './components/header/headerContainer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Loader from './components/common/loader/loader';
import { initializeApp } from './redux/reducers/appReducer';
import React from 'react'

class  App extends React.Component {

  componentDidMount(){
    this.props.initializeApp()
  }
  render() {
  if(!this.props.initialization) return (
    <div className='wrapper'>
        
    </div>
  )
  else return (
    <BrowserRouter>
      <Redirect from='' to="/profile"/>
      <div className="wrapper">
        <HeaderContainer />
        <SideBar /> 
        <Route  path='/dialogs' render = {()=> <DialogsContainer />} />
        <Route  path='/profile/:userID?' render = {()=> <ProfileContainer />} />
        <Route  path='/users' render = {()=> <UsersContainer />} />
        <Route  path='/login' render = {()=> <Login />} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
}

const mapStateToProps =(state)=>{
  return {
    initialization: state.app.initialization
  }
}


export default compose(
  connect(mapStateToProps,{initializeApp})
)(App);

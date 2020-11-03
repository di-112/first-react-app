import './nule.css'
import './App.css';
import SideBar from './components/side-bar/side-bar';
import Header from './components/header/header'
import Dialogs from './components/dialogs/dialogs';
import Profile from './components/profile/profile';
import Footer from './components/footer/footer';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';

const  App = (props)=> {
  return (
    <BrowserRouter>
    <Redirect from='' to="/profile"/>
    <div className="wrapper">
      <Header />
      <SideBar /> 
      <Route  path='/dialogs' render = {()=>{
        return <Dialogs arrDialogs={props.data.dialogsPage.arrDialogs} 
        arrMessages={props.data.dialogsPage.arrMessages}
        newMessageCurrentValue = {props.data.dialogsPage.newMessageCurrentValue}
        dispatch = {props.store.dispatch.bind(props.store)}
        />}
      } 
      />
      <Route  path='/profile' render = {()=>{
        return <Profile aboutMe= {props.data.profilesPage.aboutMe} 
        arrPosts = {props.data.profilesPage.arrPosts} 
        newPostCurrentValue = {props.data.profilesPage.newPostCurrentValue}
        arrFriends={props.data.profilesPage.arrFriends}
        dispatch = {props.store.dispatch.bind(props.store)}
        />}
      } 
      />
      <Footer />
    </div>
    </BrowserRouter>
  );
}
export default App;

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
        addMessage = {props.functions.addMessage}
        newMessageCurrentValue = {props.data.dialogsPage.newMessageCurrentValue}
        updateNewMessageValue = {props.functions.updateNewMessageValue}
        />}
      } 
      />
      <Route  path='/profile' render = {()=>{
        return <Profile aboutMe= {props.data.profilesPage.aboutMe} 
        arrPosts = {props.data.profilesPage.arrPosts} 
        updateNewPostValue = {props.functions.updateNewPostValue}
        newPostCurrentValue = {props.data.profilesPage.newPostCurrentValue}
        arrFriends={props.data.profilesPage.arrFriends}
        addPost = {props.functions.addPost}
        />}
      } 
      />
      <Footer />
    </div>
    </BrowserRouter>
  );
}
export default App;

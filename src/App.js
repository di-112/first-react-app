import './nule.css'
import './App.css';
import SideBar from './components/side-bar/side-bar';
import Header from './components/header/header'
import Dialogs from './components/dialogs/dialogs';
import Profile from './components/profile/profile';
import Footer from './components/footer/footer';
import { BrowserRouter, Route } from 'react-router-dom';

const  App = (props)=> {
  return (
    <BrowserRouter>
    <div className="wrapper">
      <Header />
      <SideBar /> 
      <Route  path='/dialogs' render = {()=>{return <Dialogs arrDialogs={props.data.arrDialogs} arrMessages={props.data.arrMessages}/>}} />
      <Route  path='/profile' render = {()=>{return <Profile aboutMe= {props.data.aboutMe} arrPosts = {props.data.arrPosts} arrFriends={props.data.arrFriends}/>}} />
      <Footer />
    </div>
    </BrowserRouter>
  );
}
export default App;

import './nule.css'
import './App.css';
import SideBar from './components/side-bar/side-bar';
import Header from './components/header/header'
import Profile from './components/profile/profile';
import Footer from './components/footer/footer';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import DialogsContainer from './components/dialogs/dialogsContainer';
import UsersContainer from './components/users/usersContainer';

const  App = (props)=> {
  return (
    <BrowserRouter>
      <Redirect from='' to="/profile"/>
      <div className="wrapper">
        <Header />
        <SideBar /> 
        <Route  path='/dialogs' render = {()=> <DialogsContainer />} />
        <Route  path='/profile' render = {()=> <Profile />} />
        <Route  path='/users' render = {()=> <UsersContainer />} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;

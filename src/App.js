import './nule.css'
import './App.css';
import SideBar from './components/side-bar/side-bar';
import Header from './components/header/header'
import Profile from './components/profile/profile';
import Footer from './components/footer/footer';
import { BrowserRouter, Route } from 'react-router-dom';

const  App = ()=> {
  return (
    <BrowserRouter>
    <div className="wrapper">
      <Header />
      <SideBar />
      <Route  path='/profile' component = {Profile}/>
      <Footer />
    </div>
    </BrowserRouter>
  );
}
export default App;

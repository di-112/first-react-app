import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './data'
import App from './App';



const render = (data) => {
   ReactDOM.render(
       <App data={data} store={store}/>,
     document.getElementById('root')
   )
 }

 
 store.subscire(render)
 render(store.data)

reportWebVitals();

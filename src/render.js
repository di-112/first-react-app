import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Functions} from './data'


const render = (data) => {
   ReactDOM.render(
       <App data={data} functions={Functions}/>,
     document.getElementById('root')
   )
 }

 export default render
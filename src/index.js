import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

console.log(document.querySelector('#root'));

//root.render(
  //<React.StrictMode>
  //  <App />
  //</React.StrictMode>,
 // document.getElementById('root'),
//);
ReactDOM.createRoot(document.querySelector('#root')).render(<App />);

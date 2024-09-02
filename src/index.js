import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
// 
import 'bootstrap-icons/font/bootstrap-icons.css';
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";


const root = ReactDOM.createRoot(document.getElementById('main'));
document.getElementById('main').style.backgroundImage  = `url(${process.env.PUBLIC_URL + "/./images/main/bg_2.jpg"})`;
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';

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

const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('main'));
document.getElementById('main').style.backgroundImage  = `url(${process.env.PUBLIC_URL + "/./images/main/bg_2.jpg"})`;
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);




reportWebVitals();

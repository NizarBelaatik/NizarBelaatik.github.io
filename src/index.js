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


import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Project from './pages/Project'
import NotFound from './pages/NotFound'

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about/",
    element: <About />,
  },
  {
    path: "/resume/",
    element: <Resume />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/project/:id",
    element: <Project />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('main'));
document.getElementById('main').style.backgroundImage  = `url(${process.env.PUBLIC_URL + "/./images/main/bg_2.jpg"})`;
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);




reportWebVitals();

import logo from './logo.svg';
import './App.css';
//import './style.css';


import { Routes, Route, Navigation} from "react-router-dom"
import { BrowserRouter} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Project from './pages/Project'
import NotFound from './pages/NotFound'
function App() {//background: var(--c_2) url("./images/main/bg.jpg")  no-repeat;
  
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Resume" element={<Resume/>}></Route>
        <Route path="/Portfolio" element={<Portfolio/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>

        <Route path="/Project/:id" element={<Project/>}></Route>
        
        <Route path="*" element={<NotFound/>}></Route>
        <Route path="/NotFound" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

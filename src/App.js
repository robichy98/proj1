import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes , 
  Route, 
  Link,
  NavLink,
} from 'react-router-dom';


import Home from './pages/home.js';
import About from './pages/About'
import Projects from './pages/projects.js';
import Contact from './pages/contact'
import './App.css';

function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-green bg-light">
      <Link className="navbar-brand" to="/">Home</Link>
      <ul className="navbar-nav mr-auto">
      <li className="nav-item">
          <NavLink className="nav-link" exact to="/About">
            About me
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/projects">
            Projects
          </NavLink>
          
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/contact">
            Contact me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}


class App extends React.Component {
  render() {
    return (
     
      <Router>
          <Navigation />
          <div class="Center">
              <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/About" element={<About/>} />
              <Route path="/projects" element={<Projects/>} />
              <Route path="/contact" element={<Contact/>} />
              </Routes>
          </div> 
        </Router>
        
    );
  }
}


export default App;


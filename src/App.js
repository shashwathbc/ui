import './App.css';
import HomePage from './HomePage';
import Projects from './Projects';
import Resume from './Resume';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="container">
       
       {/* NAVBAR */}
       {/* <nav className='navbar'> */}
          {/* <div className="left__Navbar"> */}
            <BrowserRouter>
            <div className='navbar'>
            <div className="left__Navbar">
            <NavLink className='navLinks' to="/" style={({ isActive }) => ({ 
                            color: isActive ? 'black' : 'gray' })}>
                            Home
          </NavLink>
          <NavLink className='navLinks' to="/projects" style={({ isActive }) => ({ 
                            color: isActive ? 'black' : 'gray' })}>
                            Projects
          </NavLink>
          <NavLink className='navLinks' to="/resume" style={({ isActive }) => ({ 
                            color: isActive ? 'black' : 'gray' })}>
                            Resume
          </NavLink>
           </div>
          <div className="right__Navbar">
          <img src="https://www.sudharsangs.in/linkedin.svg" className='img' />
          <img src="https://www.sudharsangs.in/github.svg" className='img' />
          <img src="https://www.sudharsangs.in/calendly.svg" className='img' />
          </div>
          </div>
          <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/projects" element={<Projects />} />
                    <Route exact path="/resume" element={<Resume />} />
                </Routes>
            </BrowserRouter>
          {/* </div> */}
       {/* </nav> */}
      
    </div>
  );
}

export default App;

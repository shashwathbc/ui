import './App.css';
import HomePage from './HomePage';
import Projects from './Projects';
import Resume from './Resume';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="container">
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
            <NavLink to="https://github.com/shashwathbc">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" className='img' />
          </NavLink>
          <NavLink to="https://www.linkedin.com/in/shashwath-bc-14726a168/">
          <img src="https://store-images.s-microsoft.com/image/apps.31120.9007199266245564.44dc7699-748d-4c34-ba5e-d04eb48f7960.bc4172bd-63f0-455a-9acd-5457f44e4473" className='img' />
          </NavLink>
          <NavLink to="https://github.com/shashwathbc">
          <img src="https://wallpapers.com/images/hd/itachi-uchiha-crow-jutsu-naioii65xyazv1vl.jpg" className='img' />
          </NavLink>
          </div>

          </div>
          <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/projects" element={<Projects />} />
                    <Route exact path="/resume" element={<Resume />} />
                </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;

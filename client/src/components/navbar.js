// import Sidebar from './Sidebar';
import './navbar.css'
import Footer from './footer';
import { Link } from 'react-router-dom';


const Navbar = ({ children }) => {
  return (
    <div className='app-container'>
      <div className="top-navbar">
        <div className="left-section">
          <div className="nav-buttons">
            {/* <a href='/' target="_blank"><img src="./logo.svg" alt="Logo" className="logo" /></a> */}
            <Link to="/">
              <img src="https://i.imgur.com/os8lEFq.png" alt="Chemical Logo" className="logo" />
            </Link>
          </div>

        </div>
        <div className="right-section">
          <Link to="/login">
            <button className="account-button">Login</button>
          </Link>
          <Link to="/register">
            <button className="account-button">Register</button>
          </Link>
        </div>

      </div>
      <div className="app-content-container">
        {/* <div className="app-sidebar-container">
          <Sidebar />
        </div> */}
        <div className="app-content">
          {children}
        </div>
      </div>
      <div className="app-footer">
        <Footer />
      </div>
    </div>
  )
}

export default Navbar
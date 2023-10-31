import './navbar.css'
import Footer from './footer';
import { Link } from 'react-router-dom';


const Navbartoo = ({ children, setAuth }) => {
    const logout = async e => {
        e.preventDefault();
        try {
            localStorage.removeItem("token");
            setAuth(false);
        } catch (err) {
            console.error(err.message);
        }
    };

  return (
    <div className='app-container'>
      <div className="top-navbar">
        <div className="left-section">
            <Link to="/">
              <img src="https://i.imgur.com/os8lEFq.png" alt="Chemistry Logo" className="logo" />
            </Link>

        </div>
        <div className="right-section">
            <button onClick={e => logout(e)} className="account-button">Logout</button>
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

export default Navbartoo
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
          <div className="nav-buttons">
            <Link to="/">
              <img src="./logo.svg" alt="Logo" className="logo" />
            </Link>
            <Link to="/chemicals">
              <button className="nav-button">Home</button>
            </Link>
          </div>

        </div>
        <div className="right-section">
            <button onClick={e => logout(e)} className="btn btn-primary">
                Logout
            </button>
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
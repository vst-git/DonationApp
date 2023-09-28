import React from 'react';
import { BiDonateBlood, BiUserCircle } from 'react-icons/bi';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../../../index.css';

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  // logout handler
  const handleLogout = () => {
    localStorage.clear();
    alert('Logout Successfully');
    navigate('/login');
  };

  return (
    <>
      <nav className="navbar">
        <div className="container-fluid ">
          <div className="navbar-brand h1">
            <BiDonateBlood color="red" />
            <span style={{ color: 'gold' }}>Donate</span>
          </div>
          <ul className="navbar-nav flex-row">
            <li className="nav-item mx-3">
              <p className="nav-link">
                <BiUserCircle style={{ color: 'red' }} />{' '}
                {user?.name || user?.hospitalName || user?.organisationName}
                &nbsp;
                <span className="badge bg-secondary badge-custom">
                  {user?.role}
                </span>
              </p>
            </li>
            {location.pathname === '/' ||
            location.pathname === '/donar' ||
            location.pathname === '/hospital' ? (
              <li className="nav-item mx-3">
                <Link to="/analytics" className="nav-link custom-link">
                  Analytics
                </Link>
              </li>
            ) : (
              <li className="nav-item mx-3">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
            )}
            <li className="nav-item">
              <p className='custom-button' onClick={handleLogout}>
                Logout
              </p>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;

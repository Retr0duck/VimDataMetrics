import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaChartBar } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark text-white" style={{ width: '280px' }}>
      <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4">Vim Dashboard</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link text-white">
            <FaHome className="me-2" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/profile" className="nav-link text-white">
            <FaUser className="me-2" />
            Profile
          </Link>
        </li>
        <li>
          <Link to="/analytics" className="nav-link text-white">
            <FaChartBar className="me-2" />
            Analytics
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

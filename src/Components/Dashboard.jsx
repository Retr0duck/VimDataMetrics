import React from 'react';
import Sidebar from './SideBar';
import Navbar from './NavbarDash';
import DashboardContent from './DashboardContent';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
  return (
    <div className="d-flex" style={{ height: '100vh' }}>
      <Sidebar />
      <div className="flex-grow-1">
        <Navbar />
        <main className="container-fluid">
        <div class="alert alert-warning" role="alert">
        !Warning! You are in a demo account
        </div>
          <DashboardContent />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;

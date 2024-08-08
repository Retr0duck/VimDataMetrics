import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './Components/AuthContext';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Home from './Pages/Home';
import RegisterForm from './Components/RegisterForm';
import Checkout from './Components/Checkout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.css';

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
         <Route path="/register" element={<RegisterForm />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default function MainApp() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}

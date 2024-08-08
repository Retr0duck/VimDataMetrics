import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import photo from '../assets/V_Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    register(email, password);
    navigate('/dashboard');
  };

  return (
    <div
      className="d-flex align-items-center py-4"
      style={{
        minHeight: '100vh',
        backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtcpXT0VQclkUy2k_O78bOrUSK--kOI0gcDw&s)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <main className="form-signin w-100 m-auto" style={{ maxWidth: '400px' }}>
        <form onSubmit={handleSubmit} className="p-4 p-md-5 border rounded-3 bg-light bg-opacity-75">
          <img className="mb-4" src={photo} alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please register</h1>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingConfirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label htmlFor="floatingConfirmPassword">Confirm Password</label>
          </div>

          <button className="btn btn-primary w-100 py-2" type="submit">Register</button>
          <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
        </form>
      </main>
    </div>
  );
}

export default Register;

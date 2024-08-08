import React from 'react';
import { AuthProvider, useAuth } from './AuthContext';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

function Control() {
  const { user } = useAuth();

  return (
    <div>
      {user ? (
        <Dashboard />
      ) : (
        <>
          <Login />
          <Register />
        </>
      )}
    </div>
  );
}

export default function Control() {
  return (
    <AuthProvider>
      <Control />
    </AuthProvider>
  );
}

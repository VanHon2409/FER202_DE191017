import React from 'react';
import './App.css';
import MovieManager from './pages/MovieManager';
import Login from './pages/Login';
import Header from './components/Header';
import { AuthProvider, useAuth } from './contexts/AuthContext';

function AppContent() {
  const { user } = useAuth();

  if (!user) {
    return <Login />;
  }

  // Role-based access control
  if (user.role !== 'admin') {
    return (
      <div className="bg-light min-vh-100">
        <Header />
        <div className="container mt-5">
          <div className="alert alert-warning shadow-sm border-0 p-5 text-center" style={{ borderRadius: '15px' }}>
            <h1 className="display-4 mb-3">🚫 Access Denied</h1>
            <p className="lead">Sorry, <strong>{user.fullName}</strong>. You do not have permission to access the Movie Management System.</p>
            <p className="text-muted">Please contact an administrator if you believe this is a mistake.</p>
          </div>
        </div>
      </div>
    );
  }

  return <MovieManager />;
}

function App() {
  return (
    <AuthProvider>
      <div className="App bg-light min-vh-100">
        <AppContent />
      </div>
    </AuthProvider>
  );
}

export default App;

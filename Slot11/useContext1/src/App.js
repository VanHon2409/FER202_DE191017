import React, { useEffect } from "react";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import LightSwitch from "./components/LightSwitch";
import CounterComponent from "./components/CounterComponent";
import LoginForm from "./components/LoginForm";
import 'bootstrap/dist/css/bootstrap.min.css';

function AppContent() {
  const { theme } = useTheme();
  const { user, logout } = useAuth();

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="app-container">
      {!user ? (
        <LoginForm />
      ) : (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div className="glass-card" style={{ padding: '10px 20px', borderRadius: '12px' }}>
              <span>Xin chào, <strong>{user.username}</strong></span>
              <span style={{ fontSize: '0.8rem', opacity: 0.7, marginLeft: '10px' }}>({user.role})</span>
            </div>
            <button
              className="premium-button"
              onClick={logout}
              style={{ background: '#ff7675', color: 'white', fontSize: '0.8rem' }}
            >
              Đăng xuất
            </button>
          </div>
          <CounterComponent />
          <LightSwitch />
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;

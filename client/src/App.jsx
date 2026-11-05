import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import AuthModule from './components/AuthModule.jsx';
import StudentPortal from './components/StudentPortal.jsx';
import ComingSoon from './components/ComingSoon.jsx';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Bring the React section into view whenever a route other than "/" is opened
  useEffect(() => {
    if (location.pathname !== '/') {
      const authElem = document.getElementById('auth-section');
      if (authElem) {
        authElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.pathname]);

  return (
    <div style={{ padding: '20px 0' }}>
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<AuthModule initialMode="login" />} />
        <Route path="/login" element={<AuthModule initialMode="login" />} />
        <Route path="/register" element={<AuthModule initialMode="register" />} />

        {/* Student Portal Parent Route (nested routes live inside StudentPortal) */}
        <Route
          path="/student/*"
          element={<StudentPortal onBackToHome={() => navigate('/')} />}
        />

        {/* Faculty and Admin portals are built in later modules */}
        <Route
          path="/faculty/*"
          element={<ComingSoon title="Faculty Portal" onBackToHome={() => navigate('/')} />}
        />
        <Route
          path="/admin/*"
          element={<ComingSoon title="Admin Portal" onBackToHome={() => navigate('/')} />}
        />

        {/* Anything unknown goes back to the login view */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
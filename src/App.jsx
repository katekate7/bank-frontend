// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Dashboard from './pages/Dashboard';
import AddExpenseFormPage from './components/AddExpenseForm';
// import EditExpenseFormPage from './pages/EditExpenseFormPage';
// import EditUserEmailPage from './pages/EditUserEmailPage';
import api from './api/axios';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    api.get('/profile')
      .then(() => setAuthenticated(true))
      .catch(() => setAuthenticated(false));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm setAuthenticated={setAuthenticated} />} />
        <Route path="/register" element={<RegisterForm setAuthenticated={setAuthenticated} />} />
        <Route path="/" element={authenticated ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/new" element={authenticated ? <AddExpenseFormPage /> : <Navigate to="/login" />} />
        {/* <Route path="/:id/edit" element={authenticated ? <EditExpenseFormPage /> : <Navigate to="/login" />} />
        <Route path="/account/edit" element={authenticated ? <EditUserEmailPage /> : <Navigate to="/login" />} /> */}
        <Route path="*" element={<Navigate to={authenticated ? "/" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;

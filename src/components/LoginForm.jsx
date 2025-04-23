import { useState } from 'react';
import api from '../api/axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ setAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // ⬅️

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await api.post('/login', {
        email,
        password,
      });

      setAuthenticated(true);
      navigate('/user/expense/'); // ⬅️ Переходимо на витрати
    } catch (error) {
      setMessage('❌ Невірний логін або пароль');
    }
  };

  return (
    <div className="auth-wrapper">
      <h2>Welcome to MyBank</h2>
      <form onSubmit={handleLogin} className="auth-form">
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">LOGIN</button>
        <p className="error">{message}</p>
        <p className="register">
          Not registered? <Link to="/register">Create an account</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;

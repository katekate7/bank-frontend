import { useState } from 'react';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';

const RegisterForm = ({ setAuthenticated }) => {
  const [email, setEmail]     = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post('/register', {
        email,
        password,
      });

      setAuthenticated(true); // оновлюємо стан
      navigate('/user/expense/');          // переходимо на Dashboard
    } catch (err) {
      setMessage(err.response?.data?.error || '❌ Помилка реєстрації');
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Створити акаунт</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Зареєструватися</button>
      <p>{message}</p>
    </form>
  );
};

export default RegisterForm;

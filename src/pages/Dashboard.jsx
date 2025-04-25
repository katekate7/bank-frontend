// src/pages/Dashboard.jsx
import { useState } from 'react';
import ExpenseCard from '../components/ExpenseCard';
import AddExpenseForm from '../components/AddExpenseForm';
import api from '../api/axios';

const Dashboard = ({ setAuthenticated }) => {
  const [expenses, setExpenses] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('authenticated');
    setAuthenticated(false);
  };  

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
    setShowForm(false);
  };

  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <button className="add-btn" onClick={() => window.location.href = '/user/expense/new'}>➕ Add Expense</button>
      <button className="logout" onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Dashboard;

// src/pages/Dashboard.jsx
import { useState } from 'react';
import ExpenseCard from '../components/ExpenseCard';
import AddExpenseForm from '../components/AddExpenseForm';
import api from '../api/axios';
import plusIcon from '../assets/plus.png'; 

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
    <body className="dashboard-body">
    <div id="dashboard-container">
      <div className="dashboard">
        <h2 className="dashboard-text">Dashboard</h2>
        <div className="add-expense">
        <img
        src={plusIcon}
        alt="Add Expense"
        className="add-expense-icon"
        onClick={() => window.location.href = '/user/expense/new'}
      />
        <button className="add-btn" onClick={() => window.location.href = '/user/expense/new'}> Add Expense</button>
        </div>
        <button className="logout" onClick={handleLogout}>Log out</button>
      </div>
    </div>
    </body>
  );
};

export default Dashboard;
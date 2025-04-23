// src/pages/Dashboard.jsx
import { useState } from 'react';
import ExpenseCard from '../components/ExpenseCard';
import AddExpenseForm from '../components/AddExpenseForm';
import api from '../api/axios';

const Dashboard = ({ setAuthenticated }) => {
  const [expenses, setExpenses] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleLogout = async () => {
    await api.post('/logout');
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
      <button className="add-btn" onClick={() => setShowForm(true)}>➕ Add Expense</button>
      {showForm && <AddExpenseForm onSave={addExpense} onCancel={() => setShowForm(false)} />}
      {expenses.map((expense, i) => (
        <ExpenseCard key={i} expense={expense} onDelete={() => deleteExpense(i)} />
      ))}
      <button className="logout" onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Dashboard;

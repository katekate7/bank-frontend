// src/components/AddExpenseForm.jsx
import { useState } from 'react';

const AddExpenseForm = ({ onSave, onCancel }) => {
  const [label, setLabel] = useState('');
  const [category, setCategory] = useState('Food');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ label, category, date, amount });
  };

  return (
    <form className="add-expense-form" onSubmit={handleSubmit}>
      <h3>Add Expense</h3>
      <input type="text" placeholder="Label" value={label} onChange={(e) => setLabel(e.target.value)} required />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Food</option>
        <option>Transport</option>
        <option>Shopping</option>
        <option>Other</option>
      </select>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default AddExpenseForm;

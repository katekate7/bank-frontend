// src/components/AddExpenseForm.jsx
import { useState, useEffect } from 'react';
import api from '../api/axios';  // ← переконайся, що з цим файлом усе ок

const AddExpenseForm = ({ onSave, onCancel }) => {
  const [label, setLabel]       = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [date, setDate]         = useState('');
  const [amount, setAmount]     = useState('');

  useEffect(() => {
    api.get('/api/categories')
      .then(({ data }) => {
        if (Array.isArray(data) && data.length > 0) {
          setCategories(data);
          setCategory(data[0]);  // перша категорія за замовчуванням
        } else {
          console.error('Категорії не повернуто або порожні:', data);
        }
      })
      .catch(err => console.error('Помилка завантаження категорій:', err));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    onSave({ label, category, date, amount });
  };


  return (
    <form className="card p-4 shadow" onSubmit={handleSubmit}>
    <div className="h3-expense">Add Expense</div>

<div className="containes-together">
    <div className="containes-text">

    <div className="label-expense">Label </div>
    <div className="category-expense">Category</div>
    <div className="date-expense">Date</div>
    <div className="amount-expense">Amount</div>    

    </div>
    <div className="containes-input">   
          <input
            type="text"
            placeholder="e.g. Dress"
            value={label}
            onChange={e => setLabel(e.target.value)}
            required
          />

          {categories.length > 0 ? (
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
              required
            >
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          ) : (
            <select disabled>
              <option>Loading...</option>
            </select>
          )}

          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="200"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            required
          /> 
        </div>
      </div>

      <div className="buttons-expense">
        <button className="save" type="submit">Save</button>
        <button className="cancel" type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default AddExpenseForm;
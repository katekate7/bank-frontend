// src/components/AddExpenseForm.jsx
import { useEffect, useState } from 'react';
import api from '../api/axios';

const AddExpenseForm = ({ onSave, onCancel, initialData = {} }) => {
  const [label, setLabel] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');

    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await api.get('/api/categories');
          setCategories(response.data);
        } catch (error) {
          console.error('Не вдалося завантажити категорії:', error);
        }
      };
    
      fetchCategories();
    }, []);
    
    const isEdit = !!initialData.label;
    // Коли завантажено і initialData, і categories
    useEffect(() => {
      if (isEdit && categories.length > 0) {
        setLabel(initialData.label || '');
        setCategory(initialData.category || categories[0]);
        setDate(initialData.date ? initialData.date.slice(0, 10) : '');
        setAmount(initialData.amount || '');
      }
    
      if (!isEdit && categories.length > 0) {
        setCategory(categories[0]); // для нового запису
      }
    }, [initialData, categories, isEdit]);
    

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ label, category, date, amount });
  };


  return (
    <form className="card p-4 shadow" onSubmit={handleSubmit}>
    <div className="h3-expense">
      {initialData && initialData.label ? 'Change Expense' : 'Add Expense'}
    </div>


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
                  <option key={idx} value={typeof cat === 'string' ? cat : cat.name}>
                    {typeof cat === 'string' ? cat : cat.name}
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
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
    // <form className="card p-4 shadow" onSubmit={handleSubmit}>
    //   <div class="h3-expense">Add Expense</div>
    //   <div class="label-expense">Label
    //     <input type="text" placeholder="dress" value={label} onChange={(e) => setLabel(e.target.value)} required />
    //   </div>
    //   <div class="category-expense">Category
    //     <select value={category} onChange={(e) => setCategory(e.target.value)}>
    //       <option>Food</option>
    //       <option>Transport</option>
    //       <option>Shopping</option>
    //       <option>Other</option>
    //     </select>
    //   </div>
    //   <div class="date-expense">Date
    //     <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
    //   </div>
    //   <div class="amount-expense">Amount
    //     <input type="number" placeholder="200" value={amount} onChange={(e) => setAmount(e.target.value)} required /> €
    //   </div>
    //   <div class="buttons-expense">
    //     <button class="save" type="submit">Save</button>
    //     <button class="cancel" type="button" onClick={onCancel}>Cancel</button>
    //   </div>
    // </form>
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

      <input type="text" placeholder="dress" value={label} onChange={(e) => setLabel(e.target.value)} required />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Food</option>
        <option>Transport</option>
        <option>Shopping</option>
        <option>Other</option>
      </select>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <input type="number" placeholder="200" value={amount} onChange={(e) => setAmount(e.target.value)} required/> 
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
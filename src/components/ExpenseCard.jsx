// src/components/ExpenseCard.jsx
const ExpenseCard = ({ expense, onDelete }) => {
  return (
    <div className="expense-card">
      <strong>{expense.label}</strong> | {expense.category}
      <p>{expense.date}</p>
      <p>Amount: {expense.amount} €</p>
      <div className="actions">
        <button>✏️</button>
        <button onClick={onDelete}>❌</button>
      </div>
    </div>
  );
};

export default ExpenseCard;

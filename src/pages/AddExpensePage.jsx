import AddExpenseForm from '../components/AddExpenseForm';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

const AddExpensePage = () => {
  const navigate = useNavigate();

  const handleSave = async (expense) => {
    try {
      await api.post('/user/expense/new', expense);
      navigate('/user/expense/');
    } catch (error) {
      console.error('Помилка при збереженні витрати:', error);
    }
  };

  return (
    <div className="add-expense-page">
      <AddExpenseForm onSave={handleSave} onCancel={() => navigate('/user/expense/')} />
    </div>
  );
};

export default AddExpensePage;

import PropTypes from "prop-types";
import "./Form.css";
import { useExpenceData } from "../DataContext.jsx";

const Form = ({
  addExpenseModal,
  editExpenseModal,
  addIncomeModal,
  handleCloseModal,
  valIndex,
}) => {
  const { setIncome, expensesData,setExpensesData,updateExpense, income } = useExpenceData();
  




  const handleExpenceSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.expenseTitle.value;
    const value = Number(e.target.elements.moneySpent.value);
    const category = e.target.elements.category.value;
  
    let image = '';
    switch (category) {
      case 'Food':
        image = 'grocery';
        break;
      case 'Entertainment':
        image = 'movie';
        break;
      case 'Traveling':
        image = 'two_wheeler';
        break;
      case 'Housing':
        image = 'apartment';
        break;
      case 'Finance':
        image = 'credit_card';
        break;
      default:
        break;
    }
{  
   if(income===0){
    alert("add income First")
   }else{
    const updatedExpensesData = [
      ...expensesData,
      { name, value, image, category }
    ];
  
    setExpensesData(updatedExpensesData);
   }
  }
    
  
    handleCloseModal();
  };
  

  const handleEditExpenceSubmit = (e) => {
    e.preventDefault();
    const expenseTitle = e.target.elements.expenseTitle.value;
    const moneySpent = e.target.elements.moneySpent.value;

    updateExpense(valIndex,expenseTitle,moneySpent)
    handleCloseModal();
  };

  const handleIncomeSubmit = (e) => {
    e.preventDefault();

    const incomeAmount = e.target.elements.incomeAmount.value;
    setIncome(incomeAmount);

    handleCloseModal();
  };
  return (
    <div className="form-container">
      {addExpenseModal && (
        <>
          <h2>Add Expense</h2>
          <form onSubmit={handleExpenceSubmit}>
            <div className="form-group">
              <label htmlFor="expenseTitle">Enter the expense:</label>
              <input
                type="text"
                id="expenseTitle"
                placeholder="E.g., Grocery"
              />
            </div>
            <div className="form-group">
              <label htmlFor="moneySpent">Money You Spent:</label>
              <input type="number" id="moneySpent" placeholder="Enter amount" />
            </div>
            <div className="form-group">
              <label htmlFor="category">Select category:</label>
              <select id="category">
                <option value="">Select category</option>
                <option value="Food">Food</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Traveling">Traveling</option>
                <option value="Housing">Housing</option>
                <option value="Finance">Finance</option>
              </select>
            </div>
            <button type="submit">Submit</button>
          </form>
        </>
      )}
      {editExpenseModal && (
        <>
          <h2>Edit Expense</h2>
          <form onSubmit={handleEditExpenceSubmit}>
            <div className="form-group">
              <label htmlFor="expenseTitle">Enter the expense:</label>
              <input
                type="text"
                id="expenseTitle"
                placeholder="E.g., Grocery"
              />
            </div>
            <div className="form-group">
              <label htmlFor="moneySpent">Money You Spent:</label>
              <input type="number" id="moneySpent" placeholder="Enter amount" />
            </div>

            <button type="submit">Submit</button>
          </form>
        </>
      )}
      {addIncomeModal && (
        <>
          <h2>Add Your Income</h2>
          <form onSubmit={handleIncomeSubmit}>
            <div className="form-group">
              <label htmlFor="incomeAmount">Income Amount:</label>
              <input
                type="number"
                id="incomeAmount"
                placeholder="Enter amount"
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </div>
  );
};

Form.propTypes = {
  addExpenseModal: PropTypes.bool.isRequired,
  editExpenseModal: PropTypes.bool.isRequired,
  addIncomeModal: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  valIndex: PropTypes.number.isRequired,
};

export default Form;

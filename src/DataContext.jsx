import { useContext, createContext, useState } from "react";
import PropTypes from "prop-types";

const ExpenceDataContext = createContext();




export const ExpenceDataProvider = ({ children }) => {
  const [regularExpenses, setRegularExpenses] = useState([
    {
      name: "Credit Card",
      value: 200,
      image: "credit_card",
      category: "Finance",
    },
    {
      name: "Subscription",
      value: 50,
      image: "subscriptions",
      category: "Finance",
    },
    { name: "Monthly Food", value: 300, image: "fastfood", category: "Food" },
    {
      name: "Travel Expense",
      value: 100,
      image: "two_wheeler",
      category: "Traveling",
    },
    { name: "Rent", value: 1000, image: "apartment", category: "Housing" },
    { name: "Grocery", value: 200, image: "grocery", category: "Food" },
  ]);

  const [expensesData, setExpensesData] = useState([
   
  ]);

  const pieData = [
    { name: "Group A", value: 100 },
    { name: "Group B", value: 200 },
    { name: "Group C", value: 300 },
    { name: "Group C", value: 500 },
    { name: "Group C", value: 600 },
  ];

  const [income, setIncome] = useState(0);
  const spent = expensesData.reduce(
    (total, expence) => total + expence.value,
    0
  );
  const available = income - spent;

  const resetIncome = () => {
    setIncome(0);
  };

  const addIncome = () => {
    setIncome(2220);
  };

  const addRegularBills = (idx) => {
    const selctedRegularExpence = regularExpenses[idx];

    if (
      selctedRegularExpence.value < income &&
      selctedRegularExpence.value + spent <= income
    ) {
      const newExpensesData = [...expensesData, selctedRegularExpence];
      setExpensesData(newExpensesData);
    } else {
      alert("Expenses are more than income");
    }
  };

  const deleteExpense = (idx) => {
    const updatedExpenceList = expensesData.filter(
      (expence, index) => index !== idx
    );
    setExpensesData(updatedExpenceList);
  };

  const updateExpense = (idx,name,value) => {
    const updatedExpenseList = [...expensesData];
    if (idx >= 0 && idx < expensesData.length) {
      if (!regularExpenses.includes(expensesData[idx])) {
        updatedExpenseList[idx] = {
          ...updatedExpenseList[idx],
          name: name,
          value: value,
        };
        setExpensesData(updatedExpenseList);
      } else {
        alert("Cannot edit regular expenses.");
      }
    } else {
      console.log("Invalid expense index.");
    }
  };



  return (
    <ExpenceDataContext.Provider
      value={{
        income,
        regularExpenses,
        setIncome,
        resetIncome,
        pieData,
        expensesData,
        spent,
        available,
        addRegularBills,
        deleteExpense,
        addIncome,
        updateExpense,
        setExpensesData,
        
      }}
    >
      {children}
    </ExpenceDataContext.Provider>
  );
};
ExpenceDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export const useExpenceData = () => useContext(ExpenceDataContext);
export default ExpenceDataContext;

import PropTypes from "prop-types";
import "./Card.css";
import PieChartSection from "./PieChartSection";
import Button from "./Button.jsx";
import { useExpenceData } from "../DataContext.jsx";


const Card = ({ cardType }) => {
  const {
    income,
    regularExpenses,
    resetIncome,
    expensesData,
    spent,
    available,
    addRegularBills,
    deleteExpense,
    addIncome,
    updateExpense,
  } = useExpenceData();






  switch (cardType) {
    case "calculation":
      return (
        <div className="calculationCard card">
          <h3>Calculation</h3>

          <div className="incomeWindow">
            <h4>INCOME</h4>
            <p>${income}</p>
          </div>
          <div className="piechart">
            <PieChartSection />
          </div>
          <div className="availbleFunds">
            <div className="spentFund">
              <h4>SPENT</h4>
              {spent < income ? <p>${spent}</p>:<p>${income}</p>}
            </div>
            <div className="availbleFund">
              <h4>AVAILABLE</h4>
            { available<0 ? <p>$0</p>:<p>${available}</p>}
            </div>
          </div>
          <Button TextContent={"Add Income"} onClick={addIncome}/>
        </div>
      );
    case "options":
      return (
        <div className="optionsCard card">
          <h3>Regular Bills</h3>
          <div className="optionbottom">
            <div className="incomeWindow ">
              <div className="addExpence">
                {regularExpenses.map((item, idx) => (
                  <div className="itemcard" key={idx}>
                    <div className="itemImg">
                      <span className="material-symbols-outlined">
                        {item.image}
                      </span>
                    </div>
                    <h4>{item.name}</h4>
                    <p>${item.value}</p>
                   
                    <span
                      className="material-symbols-outlined actionButton"
                      onClick={() => {
                        addRegularBills(idx);
                      
                      }}
                    >
                      add_circle
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Button TextContent={"Reset Income"} onClick={resetIncome} />
        </div>
      );
    case "history":
      return (
        <div className="optionsCard card">
          <h3>History</h3>
          <div className="optionbottom"></div>
        </div>
      );
    default:
      return (
        <div className="expencesCard expenceListcard card ">
          <h3>Your Expence</h3>
          {expensesData &&
            expensesData.map((item, idx) => (
              <div key={idx} className="expenceListItems incomeWindow">
                <div className="expenceListItemTitle">
                  <div className="itemcard">
                    <div className="itemImg">
                      <span className="material-symbols-outlined">
                        {item.image}
                      </span>
                    </div>
                    <h4>{item.name}</h4>
                    <p>${item.value}</p>
                    <div className="actionButtonsList">
                      <span className="material-symbols-outlined actionButton" onClick={()=>{
                        updateExpense(idx)
                      }}>
                        edit
                      </span>
                      <span className="material-symbols-outlined actionButton" onClick={()=>{
                        deleteExpense(idx);
                      }}>
                        delete
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      );
  }
};

Card.propTypes = {
  cardType: PropTypes.string.isRequired,
};

export default Card;

import PropTypes from "prop-types";
import "./Card.css";
import PieChartSection from "./PieChartSection";
import Button from "./Button.jsx";

const Card = ({ cardType }) => {
  const regularExpenses = [
    { name: "Credit Card", value: 200, image: "credit_card" },
    { name: "Subscription", value: 50, image: "subscriptions" },
    { name: "Monthly Food", value: 300, image: "fastfood" },
    { name: "Travel Expense", value: 100, image: "two_wheeler" },
    { name: "Rent", value: 1000, image: "apartment" },
    { name: "Grocery", value: 200, image: "grocery" },
  ];

  switch (cardType) {
    case "calculation":
      return (
        <div className="calculationCard card">
          <h3>Calculation</h3>

          <div className="incomeWindow">
            <h4>Income</h4>
            <p>$300</p>
          </div>
          <div className="piechart">
            <PieChartSection />
          </div>
          <div className="availbleFunds">
            <div className="spentFund">
              <h4>Spent</h4>
              <p>$300</p>
            </div>
            <div className="availbleFund">
              <h4>Available</h4>
              <p>$300</p>
            </div>
          </div>
          <Button TextContent={"Reset Expences"} />
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
                    <span className="material-symbols-outlined actionButton">
                      add_circle
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Button TextContent={"Add Income"} />
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
          <div className="expenceListItems incomeWindow">
            <div className="expenceListItemTitle">
              <div className="itemcard">
                <div className="itemImg">
                  <span className="material-symbols-outlined">movie</span>
                </div>
                <h4>Movie</h4>
                <p>$200</p>
                <div className="actionButtonsList">
                  <span className="material-symbols-outlined actionButton">
                    edit
                  </span>
                  <span className="material-symbols-outlined actionButton">
                    delete
                  </span>
                </div>
              </div>
              
            </div>
            
          </div>
          <div className="expenceListItems incomeWindow">
            <div className="expenceListItemTitle">
              <div className="itemcard">
                <div className="itemImg">
                  <span className="material-symbols-outlined">movie</span>
                </div>
                <h4>Movie</h4>
                <p>$200</p>
                <div className="actionButtonsList">
                  <span className="material-symbols-outlined actionButton">
                    edit
                  </span>
                  <span className="material-symbols-outlined actionButton">
                    delete
                  </span>
                </div>
              </div>
              
            </div>
            
          </div>
          <div className="expenceListItems incomeWindow">
            <div className="expenceListItemTitle">
              <div className="itemcard">
                <div className="itemImg">
                  <span className="material-symbols-outlined">movie</span>
                </div>
                <h4>Movie</h4>
                <p>$200</p>
                <div className="actionButtonsList">
                  <span className="material-symbols-outlined actionButton">
                    edit
                  </span>
                  <span className="material-symbols-outlined actionButton">
                    delete
                  </span>
                </div>
              </div>
              
            </div>
            
          </div>
          <div className="expenceListItems incomeWindow">
            <div className="expenceListItemTitle">
              <div className="itemcard">
                <div className="itemImg">
                  <span className="material-symbols-outlined">movie</span>
                </div>
                <h4>Movie</h4>
                <p>$200</p>
                <div className="actionButtonsList">
                  <span className="material-symbols-outlined actionButton">
                    edit
                  </span>
                  <span className="material-symbols-outlined actionButton">
                    delete
                  </span>
                </div>
              </div>
              
            </div>
            
          </div>

          <div className="expenceListItems incomeWindow">
            <div className="expenceListItemTitle">
              <div className="itemcard">
                <div className="itemImg">
                  <span className="material-symbols-outlined">movie</span>
                </div>
                <h4>Movie</h4>
                <p>$200</p>
                <div className="actionButtonsList">
                  <span className="material-symbols-outlined actionButton">
                    edit
                  </span>
                  <span className="material-symbols-outlined actionButton">
                    delete
                  </span>
                </div>
              </div>
              
            </div>
            
          </div>
          <div className="expenceListItems incomeWindow">
            <div className="expenceListItemTitle">
              <div className="itemcard">
                <div className="itemImg">
                  <span className="material-symbols-outlined">movie</span>
                </div>
                <h4>Movie</h4>
                <p>$200</p>
                <div className="actionButtonsList">
                  <span className="material-symbols-outlined actionButton">
                    edit
                  </span>
                  <span className="material-symbols-outlined actionButton">
                    delete
                  </span>
                </div>
              </div>
              
            </div>
            
          </div>
        </div>
      );
  }
};
Card.propTypes = {
  cardType: PropTypes.bool.isRequired,
};

export default Card;

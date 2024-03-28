import { useState } from "react";
import Card from "./Card";
import "./ListExpences.css";
import Button from "./Button";

const ListExpences = () => {
  const [isListPresent, setIsListPresent] = useState(true);

  return (
    <div className="listItems">
      <div className="listSection">
        {!isListPresent ? (
          <div className="emptyArea">
            <div className="expenceTitle">
            <h2>
  Looks like you haven&apos;t added any <span>Expenses yet.</span>
</h2>

              <p>
                No worries, just hit the <span>&apos;Add Expence&apos;</span> button to get
                started
              </p>
            </div>
            <div className="addSection">
              <span className="material-symbols-outlined">shopping_cart</span>
              <Button TextContent={"Add Expence"}  widthSize={"300px"} />
            </div>
          </div>
        ) : (
          <div className="listCards">
            <Card />
          
          </div>
        )}
      </div>
    </div>
  );
};

export default ListExpences;

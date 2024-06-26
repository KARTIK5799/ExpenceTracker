import { ExpenceDataProvider,  } from "./DataContext";
import "./App.css";
import Card from "./Components/Card";
import ListExpences from "./Components/ListExpences";
import NavBar from "./Components/NavBar";


function App() {


  return (
    <ExpenceDataProvider>
      <div className="app">
        <NavBar />
        <div className="bodySection">
          <div className="expenceSection">
            <ListExpences />
          </div>
          <div className="cardSection">
            <Card cardType={"calculation"} />
            <Card cardType={"options"} />
          </div>
        </div>
      </div>
    </ExpenceDataProvider>
  );
}

export default App;

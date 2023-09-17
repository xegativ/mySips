import "./App.css";
import Drink from "./components/Drink";
import AddNew from "./components/AddNew";

function App() {
  const elements = [];
  const numberOfDrinks = 3;
  for (let i = 0; i < numberOfDrinks; i++) {
    elements.push(<Drink></Drink>);
  }
  elements.push(<AddNew></AddNew>);

  return <div className="grid-row">{elements}</div>;
}

export default App;

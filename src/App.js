import "./App.css";
import Deck from "./components/Deck";

const App = () => {
  return (
    <div className="App">
      <h1>Cards.js</h1>
      <div className="deck table">
        <Deck title="Table" path="table" flipped="2" />
      </div>
      <div className="deck hand">
        <Deck title="Hand" path="deck/2" flipped="2" />
      </div>
    </div>
  );
};

export default App;

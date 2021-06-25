import "./App.scss";
import React from "react";

import Deck from "./components/deck/deck";
// import Button from "./components/Button";

const App = () => {
  return (
    <div className="App">
      <h1>Cards.js</h1>

      {/* <div className="deck">
        <Deck title="Cards" path="fulldeck" />
      </div> */}
      <div className="deck table">
        <Deck title="Table" path="table" flipped="2" />
      </div>
      <div className="deck hand">
        <Deck title="Hand" path="deck/2" flipped="2" flipCards="flipCards" />
      </div>
      {/* <Button id="flip" value="flip" />
      <Button id="hold" value="hold" />
      <Button id="withdraw" value="withdraw" /> */}
    </div>
  );
};

export default App;

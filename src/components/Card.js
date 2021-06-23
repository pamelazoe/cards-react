import React, { useState } from "react";

const Card = ({ number, symbol, flipped, buttonFlip }) => {
  const isNumber = !isNaN(number);
  const isAce = (num, sym) => (num === "A" ? <div id="ace">{sym}</div> : "");
  const [isFlipped, setIsFlipped] = useState(flipped);
  const choseClass = () => {
    if (isFlipped && !buttonFlip) {
      return "flipped";
    } else if (isFlipped && buttonFlip) return "";
  };

  return (
    <div
      className={`card ${choseClass()}`.trim()}
      onClick={() => setIsFlipped(!isFlipped)}>
      <div className="container">
        <div className={`front ${symbol} ${number}`}>
          <div className="card-corner top-left">
            <div className="number">{number}</div>
            <div className="symbol">{symbol}</div>
          </div>
          <div className="symbols">
            {isNumber
              ? new Array(parseInt(number))
                  .fill(symbol)
                  .map((cardSymbol, index) => (
                    <div key={index}>{cardSymbol}</div>
                  ))
              : isAce(number, symbol)}
          </div>
          <div className="card-corner bottom-right">
            <div>{number}</div>
            <div>{symbol}</div>
          </div>
        </div>
        <div className="back"></div>
      </div>
    </div>
  );
};

export default Card;

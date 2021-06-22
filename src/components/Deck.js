import React, { useState, useEffect } from "react";
import Card from "./Card";

const Deck = ({ title, path, flipped }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    (async () => {
      setCards(await (await fetch(`http://localhost:8000/${path}`)).json());
    })();
  }, [path]);

  return (
    <div className="head">
      <h3>{title}</h3>
      <div className="deck">
        {cards.map((card, index) => {
          const number = card.slice(0, -1);
          const symbol = card.slice(-1);
          return (
            <Card
              symbol={symbol}
              number={number}
              key={index}
              flipped={parseInt(flipped) > index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Deck;

import React, { useState, useEffect } from "react";
import Card from "./Card";

const Deck = ({ title, path, flipped, flipCards }) => {
  const [cards, setCards] = useState([]);
  const [buttonFlip, setButtonFlip] = useState(false);
  useEffect(() => {
    (async () => {
      setCards(await (await fetch(`http://localhost:8000/${path}`)).json());
    })();
  }, [path]);

  return (
    <div className="head">
      {cards.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <>
          <h3>{title}</h3>
          <div className="deck">
            {cards.map((card, index) => {
              const number = card.slice(0, -1);
              const symbol = card.slice(-1);
              const isCardFlipped = parseInt(flipped) > index;
              return (
                <>
                  <Card
                    symbol={symbol}
                    number={number}
                    key={index}
                    flipped={isCardFlipped}
                    buttonFlip={buttonFlip}
                  />
                </>
              );
            })}
          </div>
          <button onClick={() => setButtonFlip(flipped)}>{flipCards}</button>
        </>
      )}
    </div>
  );
};

export default Deck;

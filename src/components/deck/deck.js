import React, { useState, useEffect, Fragment } from "react";
import Card from "../card/card";
import "./deck.scss";

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
        <Fragment>
          <h3>{title}</h3>
          <div className="deck">
            {cards.map((card, index) => {
              const number = card.slice(0, -1);
              const symbol = card.slice(-1);
              const isCardFlipped = parseInt(flipped, 10) > index;
              return (
                <Fragment>
                  <Card
                    symbol={symbol}
                    number={number}
                    key={index}
                    flipped={isCardFlipped}
                    buttonFlip={buttonFlip}
                  />
                </Fragment>
              );
            })}
          </div>
          {flipCards ? (
            <button onClick={() => setButtonFlip(flipped)}>{flipCards}</button>
          ) : null}
        </Fragment>
      )}
    </div>
  );
};

export default Deck;

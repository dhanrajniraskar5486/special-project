import React, { useState } from "react";
import "./card.css";
import Square from "./square";

function Board() {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  function handleReset() {
    setState(Array(9).fill(null));
  }

  function checkwinner() {
    const Winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [2, 5, 8],
      [1, 4, 7],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of Winner) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
      
        return state[a];

      }
    }

    return false;
  }
  const iswinner = checkwinner();

  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  return (
    <div className="parent">
    <div className="board-container">
      {iswinner ? (
        <div className="Winner">
          {iswinner} won the game
          <button className="btn" onClick={handleReset}>Play Again</button>
        </div>
      ) : (
        <div className="Game">
          <h4 className="Heading">player {isXTurn ? "x" : "O"} please move</h4>
          <div className="board-row">
            <Square className="single-square"  onClick={() => handleClick(0)} value={state[0]} />
            <Square  className="single-square" onClick={() => handleClick(1)} value={state[1]} />
            <Square  className="single-square" onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Square  className="single-square" onClick={() => handleClick(3)} value={state[3]} />
            <Square  className="single-square" onClick={() => handleClick(4)} value={state[4]} />
            <Square   className="single-square"  onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Square  className="single-square" onClick={() => handleClick(6)} value={state[6]} />
            <Square    className="single-square" onClick={() => handleClick(7)} value={state[7]} />
            <Square   className="single-square" onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

export default Board;
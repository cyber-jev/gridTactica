import React from "react";
import { useState } from "react";
import Board3x3 from "./board3x3.component";
import "../App.css";
import Board4x4 from "./board4x4.component";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
  };

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game bg-transparent text-orange-600 m-auto p-2 flex gap-5  justify-between">
      <div className="game-board m-auto">
        <Board4x4
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
        />
      </div>
      <div className="game-info m-auto">
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
